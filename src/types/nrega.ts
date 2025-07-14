// types/mgnrega.types.ts

// Interface for work detail data (Table 1)
export interface WorkDetailData {
  workCode: string;
  // Location fields
  state: string;
  district: string;
  block: string;
  panchayat: string;
  // Other work details
  workName?: string;
  workCategory?: string;
  workType?: string;
  workStatus?: string;
  implementingAgency?: string;
  estimatedCost?: number;
  actualExpenditure?: number;
  sanctionYear?: string;
  workStartDate?: Date;
  financialYear?: string;
  estimatedPersonDays?: number;
  actualPersonDays?: number;
}

export interface PanchayatData {
  district_name_kn: string;
  district_name_en: string;
  district_code: string;
  block_name_kn: string;
  block_name_en: string;
  block_code: string;
  panchayat_name_kn: string;
  panchayat_name_en: string;
  panchayat_code: string;
}

// Interface for document links (Table 2)
export interface WorkDocumentsData {
  workCode: string;
  annualActionPlan?: string;
  technicalEstimate?: string;
  technicalSanction?: string;
  administrativeSanction?: string;
  convergenceFunds?: string;
  demandApplicationForm?: string;
  workAllocationForm?: string;
  filledEMusterRolls?: string;
  measurementBook?: string;
  materialProcurement?: string;
  wageListFTO?: string;
  skilledMusterRolls?: string;
  materialVouchers?: string;
  geotaggedPhotographs?: string;
  workCompletionCertificate?: string;
  musterRollMovementSlip?: string;
  socialAuditReport?: string;
  otherStateDocuments?: string;
}

// Combined interface for the complete scraped data
export interface ScrapedWorkData {
  workDetail: WorkDetailData;
  workDocuments: WorkDocumentsData;
}

// Interface for URL parameters
export interface MgnregaUrlParams {
  state_name: string;
  state_code: string;
  short_name: string;
  district_name: string;
  district_code: string;
  block_name: string;
  block_code: string;
  panchayat_name: string;
  panchayat_code: string;
  work_code: string;
  fin_year: string;
}
