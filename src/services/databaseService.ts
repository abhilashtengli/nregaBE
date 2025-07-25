import { prisma } from "@lib/prisma";
import { ScrapedWorkData } from "../types/nrega";

export async function saveWorkData(data: ScrapedWorkData) {
  try {
    // First, let's check if the work already exists
    const existingWork = await prisma.workDetail.findUnique({
      where: { workCode: data.workDetail.workCode }
    });

    // If it exists, we'll update it; if not, we'll create it
    const workDetail = await prisma.workDetail.upsert({
      where: {
        workCode: data.workDetail.workCode
      },
      update: {
        // Update all fields with new scraped data
        state: data.workDetail.state,
        district: data.workDetail.district,
        block: data.workDetail.block,
        panchayat: data.workDetail.panchayat,
        workName: data.workDetail.workName,
        workCategory: data.workDetail.workCategory,
        workType: data.workDetail.workType,
        workStatus: data.workDetail.workStatus,
        implementingAgency: data.workDetail.implementingAgency,
        estimatedCost: data.workDetail.estimatedCost,
        estimatedPersonDays: data.workDetail.estimatedPersonDays?.toString(),
        actualExpenditure: data.workDetail.actualExpenditure,
        actualPersonDays: data.workDetail.actualPersonDays?.toString(),
        sanctionYear: data.workDetail.sanctionYear,
        workStartDate: data.workDetail.workStartDate,
        financialYear: data.workDetail.financialYear,

        updatedAt: new Date() // Track when we last updated
      },
      create: {
        // Create new record with all data
        workCode: data.workDetail.workCode,
        state: data.workDetail.state,
        district: data.workDetail.district,
        block: data.workDetail.block,
        panchayat: data.workDetail.panchayat,
        workName: data.workDetail.workName,
        workCategory: data.workDetail.workCategory,
        workType: data.workDetail.workType,
        workStatus: data.workDetail.workStatus,
        implementingAgency: data.workDetail.implementingAgency,
        estimatedCost: data.workDetail.estimatedCost,
        estimatedPersonDays: data.workDetail.estimatedPersonDays?.toString(),
        actualExpenditure: data.workDetail.actualExpenditure,
        actualPersonDays: data.workDetail.actualPersonDays?.toString(),
        sanctionYear: data.workDetail.sanctionYear,
        workStartDate: data.workDetail.workStartDate,
        financialYear: data.workDetail.financialYear
      }
    });

    // Similarly, upsert the work documents
    const workDocuments = await prisma.workDocuments.upsert({
      where: {
        workCode: data.workDocuments.workCode
      },
      update: {
        // Update all document links
        annualActionPlan: data.workDocuments.annualActionPlan,
        technicalEstimate: data.workDocuments.technicalEstimate,
        technicalSanction: data.workDocuments.technicalSanction,
        administrativeSanction: data.workDocuments.administrativeSanction,
        convergenceFunds: data.workDocuments.convergenceFunds,
        demandApplicationForm: data.workDocuments.demandApplicationForm,
        workAllocationForm: data.workDocuments.workAllocationForm,
        filledEMusterRolls: data.workDocuments.filledEMusterRolls,
        measurementBook: data.workDocuments.measurementBook,
        materialProcurement: data.workDocuments.materialProcurement,
        wageListFTO: data.workDocuments.wageListFTO,
        skilledMusterRolls: data.workDocuments.skilledMusterRolls,
        materialVouchers: data.workDocuments.materialVouchers,
        geotaggedPhotographs: data.workDocuments.geotaggedPhotographs,
        workCompletionCertificate: data.workDocuments.workCompletionCertificate,
        musterRollMovementSlip: data.workDocuments.musterRollMovementSlip,
        socialAuditReport: data.workDocuments.socialAuditReport,
        otherStateDocuments: data.workDocuments.otherStateDocuments,
        updatedAt: new Date()
      },
      create: {
        // Create new document record
        workCode: data.workDocuments.workCode,
        annualActionPlan: data.workDocuments.annualActionPlan,
        technicalEstimate: data.workDocuments.technicalEstimate,
        technicalSanction: data.workDocuments.technicalSanction,
        administrativeSanction: data.workDocuments.administrativeSanction,
        convergenceFunds: data.workDocuments.convergenceFunds,
        demandApplicationForm: data.workDocuments.demandApplicationForm,
        workAllocationForm: data.workDocuments.workAllocationForm,
        filledEMusterRolls: data.workDocuments.filledEMusterRolls,
        measurementBook: data.workDocuments.measurementBook,
        materialProcurement: data.workDocuments.materialProcurement,
        wageListFTO: data.workDocuments.wageListFTO,
        skilledMusterRolls: data.workDocuments.skilledMusterRolls,
        materialVouchers: data.workDocuments.materialVouchers,
        geotaggedPhotographs: data.workDocuments.geotaggedPhotographs,
        workCompletionCertificate: data.workDocuments.workCompletionCertificate,
        musterRollMovementSlip: data.workDocuments.musterRollMovementSlip,
        socialAuditReport: data.workDocuments.socialAuditReport,
        otherStateDocuments: data.workDocuments.otherStateDocuments
      }
    });

    console.log(
      existingWork
        ? `Updated existing work: ${workDetail.workCode}`
        : `Created new work: ${workDetail.workCode}`
    );

    return { workDetail, workDocuments };
  } catch (error: any) {
    console.error("Error saving work data:", error);
    throw new Error(`Failed to save work data: ${error.message}`);
  }
}
/**
 * Get work by code with all documents
 */
export async function getWorkByCode(workCode: string) {
  try {
    const workDetail = await prisma.workDetail.findUnique({
      where: { workCode },
      include: { workDocuments: true }
    });

    return workDetail;
  } catch (error: any) {
    console.error("Error retrieving work data:", error);
    throw new Error(`Failed to retrieve work data: ${error.message}`);
  }
}

/**
 * Get all works with filtering
 */
export async function getAllWorks(filter?: {
  workStatus?: string;
  financialYear?: string;
  limit?: number;
  offset?: number;
}) {
  try {
    const where: any = {};

    if (filter?.workStatus) {
      where.workStatus = filter.workStatus;
    }

    if (filter?.financialYear) {
      where.financialYear = filter.financialYear;
    }

    const works = await prisma.workDetail.findMany({
      where,
      include: { workDocuments: true },
      take: filter?.limit || 50,
      skip: filter?.offset || 0,
      orderBy: { createdAt: "desc" }
    });

    return works;
  } catch (error: any) {
    console.error("Error retrieving works:", error);
    throw new Error(`Failed to retrieve works: ${error.message}`);
  }
}

/**
 * Delete work and its documents (cascades automatically)
 */
export async function deleteWork(id: string) {
  try {
    const deleted = await prisma.workDetail.delete({
      where: { id: id }
    });

    return deleted;
  } catch (error: any) {
    console.error("Error deleting work:", error);
    throw new Error(`Failed to delete work: ${error.message}`);
  }
}
