interface orderableValues {
    acquisitionTime: number;
}

interface orderable {
    orderableId: string;
    name: string;
    abbr: string;
    icon: string;
    times: string;
    instructions: string;
    orderableType: string;
    isDeleted: boolean;
    dateCreated: number;
    dateUpdated: number;
}

interface resultable {
    name: string;
    resultableId: string;
}

interface RMSOrderToResultable {
    resultable: resultable;
}

interface rmsOrders {
    orderable: orderable;
    RMSOrderToResultable: RMSOrderToResultable[];
}

interface rmsAdmissions {
    rmsAdmissionId: string;
    admissionDate: number;
    dischargeDate: any;
    primaryDoctorId: string;
    patientId: string;
    isPinned: boolean;
    isDeleted: boolean;
    dateCreated: number;
    dateUpdated: number;
    healthcareFacilityId: string;
    rmsOrders: rmsOrders[];
}

interface call {
    callId: string;
    startTime: number;
    endTime: number;
    prepTime: number;
    type: string;
    status: string;
    reason: string;
    comment: any;
    patientId: string;
    callerEmployeeId: string;
    healthcareFacilityId: string;
}

interface user {
    userId: string;
    mobile: string;
    fullName: string;
}

interface patient {
    patientId: string;
    patientType: string;
    patientCode: number;
    pin: any;
    isPinSet: boolean;
    insuranceStatus: string;
    copayAmount: number;
    fatherName: any;
    husbandName: any;
    passportNo: any;
    bloodGroup: any;
    caregiverFirstName: any;
    caregiverLastName: any;
    caregiverRelation: any;
    caregiverMobile: any;
    preferredLanguage: any;
    followUpStatus: any;
    height: number;
    age: any;
    hospitalNo: string;
    externalHn: any;
    isDemoPatient: boolean;
    termsAgreed: boolean;
    flag: boolean;
    doctorNotes: string;
    admissionStatus: string;
    activationStatus: string;
    ccmActivationStatus: string;
    program: string;
    isReferredMailSent: boolean;
    isMedicaid: boolean;
    medicareId: any;
    memberId: string;
    groupNo: string;
    secondaryMemberId: any;
    secondaryGroupNo: any;
    userId: string;
    insurancePlanId: string;
    isSecondaryInsurance: boolean;
    secondaryInsurancePlanId: any;
    healthcareFacilityId: string;
    librePatientId: any;
    librePracticeId: any;
    homeHealthAgencyMemberId: any;
    createdByEmployeeId: any;
    dateCreated: number;
    averageReadingTime: any;
    dateUpdated: number;
    referralDate: number;
    orderableValues: orderableValues[];
    rmsAdmissions: rmsAdmissions[];
    call: call[];
    user: user;
}

interface dataList {
    date: number;
    duration: number;
    day: number;
    isSunday: boolean;
    startOfDay: number;
}

interface readingModels {
    date: number;
    day: number;
    dailyReadingStatus: number;
    status: string;
}

interface monthlyReadings {
    heading: string;
    readingModels: readingModels[];
    totalReadings: number;
}

interface records {
    patientProgressReportId: string;
    patientId: string;
    reportingMonth: number;
    reportingYear: number;
    startDate: number;
    endDate: number;
    totalReadings: number;
    lastReadingDate: number;
    pAlert: number;
    readingPlusAlert: number;
    totalCallDurationSec: number;
    auxiliaryDurationSec: number;
    lastEncounterDate: number;
    sortCriteriaReading: number;
    sortCriteriaCalls: number;
    sortCriteriaCombined: number;
    listOfReadingDates: string;
    listOfPAlertDates: string;
    expectedBill: number;
    appliedCPTCodes: string;
    dayStatus: string;
    isIncentiveProgram: boolean;
    isDropOff: boolean;
    patient: patient;
    daysToInactive: number;
    totalDuration: number;
    dataList: dataList[];
    monthlyReadings: monthlyReadings;
}

interface GenModel {
    pages: number;
    count: number;
    records: records[];
}
