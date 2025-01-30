export const sampleJson = {
    "pages": 29,
    "count": 866,
    "records": [
        {
            "patientProgressReportId": "0007de45-368f-46c1-974f-fa399406346f",
            "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 9,
            "lastReadingDate": 1736769828,
            "pAlert": 0,
            "readingPlusAlert": 9,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 953,
            "lastEncounterDate": 1736817574,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 15.88,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "5 6 7 8 9 10 11 12 13",
            "listOfPAlertDates": "",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                "patientType": "CHRONIC",
                "patientCode": 780,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 25,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": 170,
                "age": null,
                "hospitalNo": "RPM-00780",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": true,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "5QM7X28PN60",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "cea030c2-cf24-49a4-b133-14d2cef4458a",
                "insurancePlanId": "c54d8e72-c962-4bb4-ba9c-4544f5b2cb53",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1719254323,
                "averageReadingTime": null,
                "dateUpdated": 1719254323,
                "referralDate": 1719201600,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736803566
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "c16496aa-8ba1-410e-9cd1-61e14396c3ef",
                        "admissionDate": 1719254323,
                        "dischargeDate": null,
                        "primaryDoctorId": "94837437-0e45-4d90-a941-a26c1e5ff197",
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1719254323,
                        "dateUpdated": 1719254323,
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            },
                            {
                                "orderable": {
                                    "orderableId": "9",
                                    "name": "Body Composition Analysis",
                                    "abbr": "BCA",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/8c7b8843-4f26-4f21-a5e5-e2ea5f993095/files-df2e73.svg",
                                    "times": "08:00,20:00",
                                    "instructions": "No instructions",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1714629710
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Weight",
                                            "resultableId": "29"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "1af1d709-34fc-4f0f-9aec-d32f392083f2",
                        "startTime": 1736293608,
                        "endTime": 1736293610,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "246bcf13-d949-427e-98fa-58f09486dca8",
                        "startTime": 1736817574,
                        "endTime": 1736817576,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "2670eedc-2024-4c0e-921c-c57c571835f7",
                        "startTime": 1736208563,
                        "endTime": 1736208623,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "escalate your readings to RN",
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "54de902a-a953-42e4-a828-f5591d375b8b",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "2b93aab0-dac8-48f4-9443-a476bedaa952",
                        "startTime": 1736809847,
                        "endTime": 1736809875,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "54de902a-a953-42e4-a828-f5591d375b8b",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "7388fa33-e8d0-4712-a396-0bd1b17998ed",
                        "startTime": 1736214696,
                        "endTime": 1736214698,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "79ee0d3b-46e2-47e1-b818-983839246465",
                        "startTime": 1736208410,
                        "endTime": 1736208558,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "54de902a-a953-42e4-a828-f5591d375b8b",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "ac0fac2f-798b-4c30-be01-5ce4ec748224",
                        "startTime": 1736214702,
                        "endTime": 1736214704,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "ea744b2b-9b87-4260-91f0-d37065b372f5",
                        "startTime": 1736264177,
                        "endTime": 1736264195,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "b6d09c9f-418e-4a4c-afe9-6ee7acbb2aa8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "f75590fe-2ae6-4654-883a-97d83de2facf",
                        "startTime": 1736293594,
                        "endTime": 1736293600,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "7d3f03d8-7ee9-416b-a1e9-843543544fee",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    }
                ],
                "user": {
                    "userId": "cea030c2-cf24-49a4-b133-14d2cef4458a",
                    "mobile": "15183715901",
                    "fullName": "Linda Cary"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 60,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736208563,
                    "duration": 60,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 9
            }
        },
        {
            "patientProgressReportId": "00d05e89-745e-435b-b703-7ffcb0df60f8",
            "patientId": "ba4e095a-59ff-4145-af07-3c523190a997",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 13,
            "lastReadingDate": 1736767598,
            "pAlert": 0,
            "readingPlusAlert": 13,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 662,
            "lastEncounterDate": 1736776211,
            "sortCriteriaReading": 3,
            "sortCriteriaCalls": 11.03,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 3 4 5 6 7 8 9 10 11 12 13",
            "listOfPAlertDates": "",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "ba4e095a-59ff-4145-af07-3c523190a997",
                "patientType": "CHRONIC",
                "patientCode": 1249,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01249",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "H71817133",
                "groupNo": "0",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "90bcea61-780c-4298-9f4f-02a196090891",
                "insurancePlanId": "709b4ea9-c378-408e-b19a-a47daa8269ca",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "51b9e05a-394d-48ce-bf85-ea87574cd473",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "afa22689-dbe2-4585-a563-3383bac2ba4e",
                "dateCreated": 1729209563,
                "averageReadingTime": null,
                "dateUpdated": 1729209563,
                "referralDate": 1729141200,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736767598
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "ed722a94-874b-42fa-9d8a-53094415011d",
                        "admissionDate": 1729209563,
                        "dischargeDate": null,
                        "primaryDoctorId": "f243a29c-4b90-42ed-a33e-aca469853559",
                        "patientId": "ba4e095a-59ff-4145-af07-3c523190a997",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1729209563,
                        "dateUpdated": 1729209563,
                        "healthcareFacilityId": "51b9e05a-394d-48ce-bf85-ea87574cd473",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "6e1023f9-fd07-4df9-abc1-c86d599fab87",
                        "startTime": 1736523647,
                        "endTime": 1736523707,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "lvm ",
                        "patientId": "ba4e095a-59ff-4145-af07-3c523190a997",
                        "callerEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                        "healthcareFacilityId": "51b9e05a-394d-48ce-bf85-ea87574cd473"
                    }
                ],
                "user": {
                    "userId": "90bcea61-780c-4298-9f4f-02a196090891",
                    "mobile": "12144144388",
                    "fullName": "Marilyn Neason"
                }
            },
            "daysToInactive": 13,
            "totalDuration": 60,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736523647,
                    "duration": 60,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 13
            }
        },
        {
            "patientProgressReportId": "00fe16b2-520e-4639-9f51-aa5a73965228",
            "patientId": "f55f6081-f4b1-4f33-bec1-d5e31d2b18db",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 2,
            "lastReadingDate": 1736116534,
            "pAlert": 0,
            "readingPlusAlert": 2,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 522,
            "lastEncounterDate": 1736814077,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 8.7,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "3 5",
            "listOfPAlertDates": "",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "f55f6081-f4b1-4f33-bec1-d5e31d2b18db",
                "patientType": "CHRONIC",
                "patientCode": 1489,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01489",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "4G00PJ4QT13",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "d34ffd97-ea79-41fc-a5d5-f051b5dd4e10",
                "insurancePlanId": "c00f0e63-3787-4dff-8eb5-3f0a1e69acdd",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                "dateCreated": 1732046498,
                "averageReadingTime": null,
                "dateUpdated": 1732046498,
                "referralDate": 1731996000,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736116534
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "ff212432-04e3-45f0-a433-3130fbfbf4a8",
                        "admissionDate": 1732046498,
                        "dischargeDate": null,
                        "primaryDoctorId": "e1cdc110-7acc-414d-b778-636ff0353d35",
                        "patientId": "f55f6081-f4b1-4f33-bec1-d5e31d2b18db",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1732046498,
                        "dateUpdated": 1732046498,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "ca4042d1-3948-4d8b-8e16-3eedac595054",
                        "startTime": 1736553109,
                        "endTime": 1736553169,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "call patient left vm",
                        "patientId": "f55f6081-f4b1-4f33-bec1-d5e31d2b18db",
                        "callerEmployeeId": "54de902a-a953-42e4-a828-f5591d375b8b",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "cd93f5d7-4032-4225-bb5e-b8f7379dc8da",
                        "startTime": 1735689107,
                        "endTime": 1735689209,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "f55f6081-f4b1-4f33-bec1-d5e31d2b18db",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "d34ffd97-ea79-41fc-a5d5-f051b5dd4e10",
                    "mobile": "12147366795",
                    "fullName": "Sharon Hennessy"
                }
            },
            "daysToInactive": 6,
            "totalDuration": 60,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736553109,
                    "duration": 60,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 2
            }
        },
        {
            "patientProgressReportId": "01afcef7-c555-4a01-80a9-ecb52d0105e9",
            "patientId": "532320db-0f61-4ed0-868a-904450d81722",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 13,
            "lastReadingDate": 1736786876,
            "pAlert": 0,
            "readingPlusAlert": 13,
            "totalCallDurationSec": 840,
            "auxiliaryDurationSec": 599,
            "lastEncounterDate": 1736805073,
            "sortCriteriaReading": 3,
            "sortCriteriaCalls": 3.98,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 3 4 5 6 7 8 9 10 11 12 13",
            "listOfPAlertDates": "",
            "expectedBill": 25,
            "appliedCPTCodes": "[\"99457\"]",
            "dayStatus": "[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "532320db-0f61-4ed0-868a-904450d81722",
                "patientType": "CHRONIC",
                "patientCode": 1237,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01237",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "1AE0PJ9HW09",
                "groupNo": "000",
                "secondaryMemberId": "524535138",
                "secondaryGroupNo": "0",
                "userId": "5fd1e1b6-e869-4257-8d08-1c98cf4d0c41",
                "insurancePlanId": "baae8675-fc52-4fc5-a8c7-2e2aff017727",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "afa22689-dbe2-4585-a563-3383bac2ba4e",
                "dateCreated": 1729109574,
                "averageReadingTime": null,
                "dateUpdated": 1729109574,
                "referralDate": 1728882000,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736803752
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "38c803ec-b906-47c2-88ff-79132e469342",
                        "admissionDate": 1729109574,
                        "dischargeDate": null,
                        "primaryDoctorId": "6d452747-ca8d-43fa-ba15-2f26df889bab",
                        "patientId": "532320db-0f61-4ed0-868a-904450d81722",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1729109574,
                        "dateUpdated": 1729109574,
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "02c0cd55-3b04-4106-9022-e983a9eb166b",
                        "startTime": 1736187180,
                        "endTime": 1736188020,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "we did confirm the device serial number and the numbers are matching in the orderables. Ms.Jenkins and I had a good conversation regarding her pain , she did discussed about her neck surgery done back few years ago that is always causing pain in her shoulders and giving headched as she said . her Kidney doctor has asked her to not take too many pain killers that will affect her health,. I have asked Ms.Jenkins to relax as she said she is feeling fine and will start taking her medication as soon as she wakes up so the blood pressure numbers are showing good in the monitor .",
                        "patientId": "532320db-0f61-4ed0-868a-904450d81722",
                        "callerEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    },
                    {
                        "callId": "233fc215-cc8c-48dc-a22c-feb2f68e120d",
                        "startTime": 1735859576,
                        "endTime": 1735859609,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "532320db-0f61-4ed0-868a-904450d81722",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    },
                    {
                        "callId": "386a3f52-e163-4c64-80b8-c934571784f3",
                        "startTime": 1735859613,
                        "endTime": 1735859614,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "532320db-0f61-4ed0-868a-904450d81722",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    },
                    {
                        "callId": "471db964-1d23-4bd7-a277-6e96fcf34612",
                        "startTime": 1735833547,
                        "endTime": 1735833553,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "532320db-0f61-4ed0-868a-904450d81722",
                        "callerEmployeeId": "b6d09c9f-418e-4a4c-afe9-6ee7acbb2aa8",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    },
                    {
                        "callId": "d1430a44-2003-45f1-92f8-7ee044f338a2",
                        "startTime": 1736453413,
                        "endTime": 1736453423,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "532320db-0f61-4ed0-868a-904450d81722",
                        "callerEmployeeId": "6b516a11-52e4-4273-bec1-2224b790619a",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    },
                    {
                        "callId": "fd9e26de-0d06-41d2-8a19-73b30a768dfc",
                        "startTime": 1736465510,
                        "endTime": 1736465522,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "532320db-0f61-4ed0-868a-904450d81722",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    }
                ],
                "user": {
                    "userId": "5fd1e1b6-e869-4257-8d08-1c98cf4d0c41",
                    "mobile": "12142546387",
                    "fullName": "Betty Jean Jenkins"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 840,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736187180,
                    "duration": 840,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 13
            }
        },
        {
            "patientProgressReportId": "0244642d-68c5-46a9-bee4-a45032921481",
            "patientId": "30c5869a-bc35-4569-804f-750931c652ae",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 6,
            "lastReadingDate": 1736573246,
            "pAlert": 4,
            "readingPlusAlert": 10,
            "totalCallDurationSec": 60,
            "auxiliaryDurationSec": 1205,
            "lastEncounterDate": 1736793108,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 1.08,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "2 3 6 8 9 11",
            "listOfPAlertDates": "10 12 13 4",
            "expectedBill": 25,
            "appliedCPTCodes": "[\"99457\"]",
            "dayStatus": "[2,1,1,2,2,1,2,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "30c5869a-bc35-4569-804f-750931c652ae",
                "patientType": "CHRONIC",
                "patientCode": 1607,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01607",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "9F43Yn0EA12",
                "groupNo": "000",
                "secondaryMemberId": "TST202",
                "secondaryGroupNo": "0000",
                "userId": "73c9a007-1c20-4d71-a48e-1a50d8bb9acb",
                "insurancePlanId": "1aa9c05a-d5ac-41e6-8384-ba175f1d3e93",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": "e127e2c4-78a8-46a2-bcb2-a659f664b55d",
                "healthcareFacilityId": "33d9b946-3f77-4aa8-80c4-46ac97f86ed6",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                "dateCreated": 1734131305,
                "averageReadingTime": null,
                "dateUpdated": 1734131305,
                "referralDate": 1734073200,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736618505
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "dc1a3898-eeca-427b-b70b-8e5aab4d9803",
                        "admissionDate": 1734131305,
                        "dischargeDate": null,
                        "primaryDoctorId": "27756cf3-dc95-418b-b51c-fdd5455b0ef5",
                        "patientId": "30c5869a-bc35-4569-804f-750931c652ae",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1734131305,
                        "dateUpdated": 1734131305,
                        "healthcareFacilityId": "33d9b946-3f77-4aa8-80c4-46ac97f86ed6",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "00996991-833d-4442-8988-d2d3868d5e9a",
                        "startTime": 1735902098,
                        "endTime": 1735902105,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "30c5869a-bc35-4569-804f-750931c652ae",
                        "callerEmployeeId": "6b516a11-52e4-4273-bec1-2224b790619a",
                        "healthcareFacilityId": "33d9b946-3f77-4aa8-80c4-46ac97f86ed6"
                    },
                    {
                        "callId": "8bb391c3-3d6b-4e4d-8525-2dd96f8ab550",
                        "startTime": 1735949220,
                        "endTime": 1735949280,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Patient responded to my text and stated she was feeling fine. She said she is stressed but will continue to monitor BP. ",
                        "patientId": "30c5869a-bc35-4569-804f-750931c652ae",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "33d9b946-3f77-4aa8-80c4-46ac97f86ed6"
                    },
                    {
                        "callId": "aa0acad5-a050-4d04-bd91-593e91114610",
                        "startTime": 1735929868,
                        "endTime": 1735930214,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "30c5869a-bc35-4569-804f-750931c652ae",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "33d9b946-3f77-4aa8-80c4-46ac97f86ed6"
                    },
                    {
                        "callId": "b0ea28f3-cfc3-4f75-ab39-396e3abdb894",
                        "startTime": 1735929833,
                        "endTime": 1735929836,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "30c5869a-bc35-4569-804f-750931c652ae",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "33d9b946-3f77-4aa8-80c4-46ac97f86ed6"
                    },
                    {
                        "callId": "e21cff18-702d-4cf4-94c2-75fd4964627a",
                        "startTime": 1735930216,
                        "endTime": 1735930218,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "30c5869a-bc35-4569-804f-750931c652ae",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "33d9b946-3f77-4aa8-80c4-46ac97f86ed6"
                    }
                ],
                "user": {
                    "userId": "73c9a007-1c20-4d71-a48e-1a50d8bb9acb",
                    "mobile": "19162902174",
                    "fullName": "Margaret Sampson"
                }
            },
            "daysToInactive": 12,
            "totalDuration": 60,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735949220,
                    "duration": 60,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 10
            }
        },
        {
            "patientProgressReportId": "0301c972-a529-4dc2-b525-ad3099454ede",
            "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 11,
            "lastReadingDate": 1736820866,
            "pAlert": 1,
            "readingPlusAlert": 12,
            "totalCallDurationSec": 60,
            "auxiliaryDurationSec": 1474,
            "lastEncounterDate": 1736798600,
            "sortCriteriaReading": 4,
            "sortCriteriaCalls": 5.57,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 5 6 7 8 9 10 11 12 13",
            "listOfPAlertDates": "3",
            "expectedBill": 20,
            "appliedCPTCodes": "[\"99457\"]",
            "dayStatus": "[1,1,2,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
                "patientType": "CHRONIC",
                "patientCode": 1411,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01411",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "988799763",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "bd361232-d90c-46ec-90bc-9e6f2808a126",
                "insurancePlanId": "6350e41a-3b3b-411c-9cb9-81f75bc3d865",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                "dateCreated": 1730913263,
                "averageReadingTime": null,
                "dateUpdated": 1730913263,
                "referralDate": 1730872800,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736820866
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "38e7af87-1a01-40da-bcde-8c594f075072",
                        "admissionDate": 1730913263,
                        "dischargeDate": null,
                        "primaryDoctorId": "dcc86f24-b0dc-4539-8312-e817757296bb",
                        "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1730913263,
                        "dateUpdated": 1730913263,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "30ee728c-db5c-4a4a-944d-bd764cf25bda",
                        "startTime": 1736796442,
                        "endTime": 1736796447,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "4894fbc2-b406-4651-84ce-88d5f6598336",
                        "startTime": 1735945293,
                        "endTime": 1735945353,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "called and LVM",
                        "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "90a4c7fe-293a-4a1e-a493-6fc5583416da",
                        "startTime": 1736798520,
                        "endTime": 1736798580,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Sent patient a text asking how she was doing and she replied she was doing good. ",
                        "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "a1811358-b941-4b8d-98a6-ac0985fa8d91",
                        "startTime": 1736186046,
                        "endTime": 1736186106,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": null,
                        "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
                        "callerEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "e0b382fc-936d-4a25-a319-2411e9155e19",
                        "startTime": 1736796321,
                        "endTime": 1736796440,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "f03c6467-8dbf-428c-a3c8-7e5c348191d2",
                        "startTime": 1736700117,
                        "endTime": 1736700141,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "777b5bf8-dfff-4547-a62d-f4b44bb18ad5",
                        "callerEmployeeId": "c3da5340-1c3e-4beb-a602-6fc1f5908219",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "bd361232-d90c-46ec-90bc-9e6f2808a126",
                    "mobile": "12147290019",
                    "fullName": "Shirley Sims"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 180,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735945293,
                    "duration": 60,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736186046,
                    "duration": 60,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736798520,
                    "duration": 60,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 12
            }
        },
        {
            "patientProgressReportId": "033b0270-0bc3-44b9-84b3-3f788678564d",
            "patientId": "9bed9c03-cb62-4363-85a7-3f72130c01cc",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 13,
            "endDate": 31,
            "totalReadings": 0,
            "lastReadingDate": null,
            "pAlert": 1,
            "readingPlusAlert": 1,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 0,
            "lastEncounterDate": null,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 0,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "",
            "listOfPAlertDates": "13",
            "expectedBill": 0,
            "appliedCPTCodes": null,
            "dayStatus": "[3,3,3,3,3,3,3,3,3,3,3,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "9bed9c03-cb62-4363-85a7-3f72130c01cc",
                "patientType": "CHRONIC",
                "patientCode": 1690,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01690",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ASSIGNED",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "076W21826",
                "groupNo": "000000",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "c17c3b86-7f43-4408-8886-77957c6ed212",
                "insurancePlanId": "c7333374-5da7-41fd-863d-44c4682073c8",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                "dateCreated": 1736804435,
                "averageReadingTime": null,
                "dateUpdated": 1736804435,
                "referralDate": 1736748000,
                "orderableValues": [],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "4cfcccb7-c096-4b5c-b9ae-3c796c5ad7d0",
                        "admissionDate": 1736804435,
                        "dischargeDate": null,
                        "primaryDoctorId": "ecffd74b-8aa0-4b8c-9acc-863c6a3045de",
                        "patientId": "9bed9c03-cb62-4363-85a7-3f72130c01cc",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1736804435,
                        "dateUpdated": 1736804435,
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [],
                "user": {
                    "userId": "c17c3b86-7f43-4408-8886-77957c6ed212",
                    "mobile": "12148156499",
                    "fullName": "Maxine Williams"
                }
            },
            "daysToInactive": "-",
            "totalDuration": 0,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "0",
                "readingModels": [
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 1,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 2,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 3,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 4,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 5,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 6,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 7,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 8,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 9,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 10,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 11,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 12,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 13,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 14,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 15,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 16,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 17,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 18,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 19,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 20,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 21,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 22,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 23,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 24,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 25,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 26,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 27,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 28,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 29,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 30,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 31,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 1
            }
        },
        {
            "patientProgressReportId": "033eb5e5-b7c0-4b4c-80eb-6704278bbabc",
            "patientId": "32ee9c8d-fffe-48ce-a296-e680e213a31c",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 6,
            "lastReadingDate": 1736745082,
            "pAlert": 6,
            "readingPlusAlert": 12,
            "totalCallDurationSec": 300,
            "auxiliaryDurationSec": 259,
            "lastEncounterDate": 1736541840,
            "sortCriteriaReading": 4,
            "sortCriteriaCalls": 9.32,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 3 6 7 10 12",
            "listOfPAlertDates": "11 2 4 5 8 9",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[1,2,1,2,2,1,1,2,2,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "32ee9c8d-fffe-48ce-a296-e680e213a31c",
                "patientType": "CHRONIC",
                "patientCode": 1589,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01589",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "H75103695",
                "groupNo": "000000",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "adac4a46-e8f1-4184-895e-e7d9f7fc717b",
                "insurancePlanId": "0f7af9d4-0577-4360-952a-dcc0e9b76b71",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                "dateCreated": 1733940534,
                "averageReadingTime": null,
                "dateUpdated": 1733940534,
                "referralDate": 1733810400,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736745082
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "2e90c934-2a50-417a-8bb3-695eef30feb5",
                        "admissionDate": 1733940534,
                        "dischargeDate": null,
                        "primaryDoctorId": "ecffd74b-8aa0-4b8c-9acc-863c6a3045de",
                        "patientId": "32ee9c8d-fffe-48ce-a296-e680e213a31c",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1733940534,
                        "dateUpdated": 1733940534,
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "20897edc-2480-40a0-b927-69a5f5108767",
                        "startTime": 1736277060,
                        "endTime": 1736277360,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "The patient reports to be doing well. She reports she had a nice holiday. We discussed her biometric data and ways to better control it. She was provided education on a heart-healthy diet and how it correlates to BP control. Education on exercise was provided. The patient did not have any questions or concerns. She has not had medication changes. Will continue to monitor. ",
                        "patientId": "32ee9c8d-fffe-48ce-a296-e680e213a31c",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    }
                ],
                "user": {
                    "userId": "adac4a46-e8f1-4184-895e-e7d9f7fc717b",
                    "mobile": "12146648370",
                    "fullName": "Carolyn  Armstrong"
                }
            },
            "daysToInactive": 13,
            "totalDuration": 300,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736277060,
                    "duration": 300,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 12
            }
        },
        {
            "patientProgressReportId": "0384468c-f8e6-468a-a22d-a3418c9751f5",
            "patientId": "eb55f7c8-8c4c-4131-b92b-bd590c5c0ea3",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 6,
            "lastReadingDate": 1736771050,
            "pAlert": 3,
            "readingPlusAlert": 9,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 518,
            "lastEncounterDate": 1736807582,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 8.63,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "5 7 8 11 12 13",
            "listOfPAlertDates": "10 3 4",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,2,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "eb55f7c8-8c4c-4131-b92b-bd590c5c0ea3",
                "patientType": "CHRONIC",
                "patientCode": 877,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-00877",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "682027708",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "09c6e473-065f-4bb3-859a-a037d0d3f77f",
                "insurancePlanId": "8ff5e170-258c-4108-8b8b-fcf4fbb113a7",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1721330105,
                "averageReadingTime": null,
                "dateUpdated": 1721330105,
                "referralDate": 1721278800,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736771050
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "929e5f4d-0c83-413e-94d6-92b6ab5af892",
                        "admissionDate": 1721330105,
                        "dischargeDate": null,
                        "primaryDoctorId": "4f5fd0a0-6098-4762-ba0f-903c6d974b91",
                        "patientId": "eb55f7c8-8c4c-4131-b92b-bd590c5c0ea3",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1721330105,
                        "dateUpdated": 1721330105,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [],
                "user": {
                    "userId": "09c6e473-065f-4bb3-859a-a037d0d3f77f",
                    "mobile": "14692238482",
                    "fullName": "Margaret Lopes"
                }
            },
            "daysToInactive": 13,
            "totalDuration": 0,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 9
            }
        },
        {
            "patientProgressReportId": "03913f9a-5582-4cae-9953-49cf7f68db09",
            "patientId": "2d1eefca-bf40-44c8-a8ad-c59b7da4bbe9",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 13,
            "lastReadingDate": 1736791634,
            "pAlert": 0,
            "readingPlusAlert": 13,
            "totalCallDurationSec": 360,
            "auxiliaryDurationSec": 1145,
            "lastEncounterDate": 1736798510,
            "sortCriteriaReading": 3,
            "sortCriteriaCalls": 5.08,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 3 4 5 6 7 8 9 10 11 12 13",
            "listOfPAlertDates": "",
            "expectedBill": 25,
            "appliedCPTCodes": "[\"99457\"]",
            "dayStatus": "[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "2d1eefca-bf40-44c8-a8ad-c59b7da4bbe9",
                "patientType": "CHRONIC",
                "patientCode": 1464,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01464",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "5MQ3R27HD12",
                "groupNo": "00000000",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "8014e9b5-2f77-4f0a-a9a4-9f4c7ae85d70",
                "insurancePlanId": "3a4823ca-4dd6-4788-91ee-c5c59aad0463",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                "dateCreated": 1731525598,
                "averageReadingTime": null,
                "dateUpdated": 1731525598,
                "referralDate": 1731477600,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736791634
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "2649e4ff-5dff-4e24-a61a-c8bc80055dac",
                        "admissionDate": 1731525598,
                        "dischargeDate": null,
                        "primaryDoctorId": "ecffd74b-8aa0-4b8c-9acc-863c6a3045de",
                        "patientId": "2d1eefca-bf40-44c8-a8ad-c59b7da4bbe9",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1731525598,
                        "dateUpdated": 1731525598,
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "5d59b776-3c7b-4776-8e1d-6fe89d26be34",
                        "startTime": 1736353374,
                        "endTime": 1736353434,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "left a brief msg ",
                        "patientId": "2d1eefca-bf40-44c8-a8ad-c59b7da4bbe9",
                        "callerEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    },
                    {
                        "callId": "723749cd-a51b-410c-ab0c-25f660c832d1",
                        "startTime": 1736538286,
                        "endTime": 1736538346,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Attempted to contact patient for panel but no response at this time and a voicemail was left.",
                        "patientId": "2d1eefca-bf40-44c8-a8ad-c59b7da4bbe9",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    },
                    {
                        "callId": "bafd83c5-8897-4f6f-8fd5-af3ad086d5ae",
                        "startTime": 1736355900,
                        "endTime": 1736356260,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Ms.Peacok returned my call and said she is doing good . we had a good conversation about her current situation , where she said sha has family in other states and she is by herself , her one son stays with her but he is always busy and that is why she is always on top of her stuff and make sure to takecare of her health. She did say that she is thankful for the team to monitor her blood pressure reading. We were able to verify the device number as well. ",
                        "patientId": "2d1eefca-bf40-44c8-a8ad-c59b7da4bbe9",
                        "callerEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    }
                ],
                "user": {
                    "userId": "8014e9b5-2f77-4f0a-a9a4-9f4c7ae85d70",
                    "mobile": "14694788864",
                    "fullName": "Barbara Peacock"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 480,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736355900,
                    "duration": 420,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736538286,
                    "duration": 60,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 13
            }
        },
        {
            "patientProgressReportId": "03a3a1fc-3067-4cc6-950b-48fe7c5b9b53",
            "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 10,
            "lastReadingDate": 1736778926,
            "pAlert": 1,
            "readingPlusAlert": 11,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 634,
            "lastEncounterDate": 1736798991,
            "sortCriteriaReading": 5,
            "sortCriteriaCalls": 10.57,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 3 4 5 7 8 10 12 13",
            "listOfPAlertDates": "11",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[1,1,1,1,1,2,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                "patientType": "CHRONIC",
                "patientCode": 1541,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01541",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "6JV8HF7RQ37",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "5dd1d7a8-4a7e-4711-9174-855a44da035a",
                "insurancePlanId": "3a4823ca-4dd6-4788-91ee-c5c59aad0463",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "83e5ec2e-7d44-43ed-9ca0-fb12a9e635e9",
                "dateCreated": 1733326760,
                "averageReadingTime": null,
                "dateUpdated": 1733326760,
                "referralDate": 1733292000,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736778926
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "b88b8f14-d076-497e-b0c9-1eba2418b510",
                        "admissionDate": 1733326760,
                        "dischargeDate": null,
                        "primaryDoctorId": "4ba3de06-5fed-4915-a667-3af3ce52584a",
                        "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1733326760,
                        "dateUpdated": 1733326760,
                        "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "04614414-55cc-42a6-923e-121c7c791049",
                        "startTime": 1736384822,
                        "endTime": 1736384825,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281"
                    },
                    {
                        "callId": "2249af9c-a5fd-424c-9e99-b6a46615ee5a",
                        "startTime": 1736384835,
                        "endTime": 1736384836,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281"
                    },
                    {
                        "callId": "2e78a7bb-f259-4cd1-9f85-b8830f4faf3c",
                        "startTime": 1736798842,
                        "endTime": 1736798902,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "called,lvm",
                        "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281"
                    },
                    {
                        "callId": "49793e84-d580-4b6e-8b87-ee6600074187",
                        "startTime": 1736376320,
                        "endTime": 1736376340,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281"
                    },
                    {
                        "callId": "6ad135d8-7cbc-49ca-8155-5d8ffa98e2cb",
                        "startTime": 1736376691,
                        "endTime": 1736376694,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281"
                    },
                    {
                        "callId": "ddc2213a-4255-4cad-acaf-1f392dadcffa",
                        "startTime": 1736376367,
                        "endTime": 1736376427,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Escalated to RN",
                        "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281"
                    },
                    {
                        "callId": "ed60285b-11b1-4ba4-93a8-de3f6c9a9af0",
                        "startTime": 1736384830,
                        "endTime": 1736384832,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "6d29c4d9-1c2f-4cc8-af8d-f8a63ad2eecb",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "9e690ebc-c64f-4586-a01d-7caf097ae281"
                    }
                ],
                "user": {
                    "userId": "5dd1d7a8-4a7e-4711-9174-855a44da035a",
                    "mobile": "18179992037",
                    "fullName": "Patrick Delgado"
                }
            },
            "daysToInactive": 13,
            "totalDuration": 120,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736376367,
                    "duration": 60,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736798842,
                    "duration": 60,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 11
            }
        },
        {
            "patientProgressReportId": "03e51c26-8c9f-4901-a99f-12820ef611d6",
            "patientId": "2bbd5add-0edd-4357-9603-73d0a13bb757",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 3,
            "lastReadingDate": 1736601061,
            "pAlert": 1,
            "readingPlusAlert": 4,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 892,
            "lastEncounterDate": 1736553050,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 14.87,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "2 10 11",
            "listOfPAlertDates": "3",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "2bbd5add-0edd-4357-9603-73d0a13bb757",
                "patientType": "CHRONIC",
                "patientCode": 1223,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 45,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01223",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "ZGP844158893",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "e77dd232-3e80-401b-9022-6875aef04ceb",
                "insurancePlanId": "d67bdbba-bb40-4506-bfb7-bd390dd0071b",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                "dateCreated": 1729095104,
                "averageReadingTime": null,
                "dateUpdated": 1729095104,
                "referralDate": 1729054800,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736601061
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "19157c04-0a65-4a4b-84de-a54fbca4dcbc",
                        "admissionDate": 1729095104,
                        "dischargeDate": null,
                        "primaryDoctorId": "24942dea-bb73-4f8f-add1-40898ad768b0",
                        "patientId": "2bbd5add-0edd-4357-9603-73d0a13bb757",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1729095104,
                        "dateUpdated": 1729095104,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "648c9b5d-375f-417d-b273-244335546d28",
                        "startTime": 1735855278,
                        "endTime": 1735855338,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "attempted to call,lvm",
                        "patientId": "2bbd5add-0edd-4357-9603-73d0a13bb757",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "d93c19db-b0f2-4a36-8815-f3cdd1b88acb",
                        "startTime": 1736454220,
                        "endTime": 1736454280,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "sent sms via charms. ",
                        "patientId": "2bbd5add-0edd-4357-9603-73d0a13bb757",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "e77dd232-3e80-401b-9022-6875aef04ceb",
                    "mobile": "14699391201",
                    "fullName": "Dawnmarie Wade"
                }
            },
            "daysToInactive": 11,
            "totalDuration": 120,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735855278,
                    "duration": 60,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736454220,
                    "duration": 60,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 4
            }
        },
        {
            "patientProgressReportId": "03f492a8-dec5-4ae1-bbe5-559176970ef4",
            "patientId": "a765859c-09ea-4936-823d-dd7f46be00c1",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 4,
            "lastReadingDate": 1736709671,
            "pAlert": 4,
            "readingPlusAlert": 8,
            "totalCallDurationSec": 60,
            "auxiliaryDurationSec": 216,
            "lastEncounterDate": 1736802862,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 4.6,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "3 4 8 12",
            "listOfPAlertDates": "10 11 6 7",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,1,1,2,2,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "a765859c-09ea-4936-823d-dd7f46be00c1",
                "patientType": "CHRONIC",
                "patientCode": 255,
                "pin": "df4fe8a8bcd5c95cdb640aa9793bb32b",
                "isPinSet": true,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": 157,
                "age": null,
                "hospitalNo": "RPM-00255",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": true,
                "flag": true,
                "doctorNotes": "1/18/2024 Contacted patient about readings, she said she forgot to take reading and left questionnaire report. TM \n1/3/2024 lvm by Aetesaam. \nAccepted onboarding 1/8/24\n\nUnited AARP Supplemental 329199693-11\n\nNeed to contact for benefits: AARP SUPPLEMENTAL PLANS INS BY UNITEDHEALTHCARE",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "8T79M01FE38",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "e0104a05-6499-45ee-9720-1e77560f8fba",
                "insurancePlanId": "baae8675-fc52-4fc5-a8c7-2e2aff017727",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": null,
                "averageReadingTime": null,
                "dateUpdated": null,
                "referralDate": 1697050100,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736709671
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "0544abaa-7a79-46c5-ab8d-92a38ae49de2",
                        "admissionDate": 1697050100,
                        "dischargeDate": null,
                        "primaryDoctorId": "17ccd3cc-3876-4f6f-aa27-f86450f7f754",
                        "patientId": "a765859c-09ea-4936-823d-dd7f46be00c1",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1697050100,
                        "dateUpdated": 1697050100,
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "6d268d65-5bbd-4334-8837-0520175985a7",
                        "startTime": 1736802660,
                        "endTime": 1736802720,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Called the patient. she said she is doing good and gently reminded her to take her readings more regularly to which she agreed. No issues to report at this time",
                        "patientId": "a765859c-09ea-4936-823d-dd7f46be00c1",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    }
                ],
                "user": {
                    "userId": "e0104a05-6499-45ee-9720-1e77560f8fba",
                    "mobile": "18174564946",
                    "fullName": "Vicki Nassar"
                }
            },
            "daysToInactive": 13,
            "totalDuration": 60,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736802660,
                    "duration": 60,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 8
            }
        },
        {
            "patientProgressReportId": "0427d37a-ffa1-41c5-9c45-70a537952ef4",
            "patientId": "9bd4b465-a042-440a-8b45-579685c13f83",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 13,
            "lastReadingDate": 1736803618,
            "pAlert": 0,
            "readingPlusAlert": 13,
            "totalCallDurationSec": 480,
            "auxiliaryDurationSec": 602,
            "lastEncounterDate": 1736610958,
            "sortCriteriaReading": 3,
            "sortCriteriaCalls": 18.03,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 3 4 5 6 7 8 9 10 11 12 13",
            "listOfPAlertDates": "",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "9bd4b465-a042-440a-8b45-579685c13f83",
                "patientType": "CHRONIC",
                "patientCode": 1362,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": 170,
                "age": null,
                "hospitalNo": "RPM-01362",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": true,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "4E96Q71FF52",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "09a3ac67-afed-4f6a-8df1-6e008ef9a4bd",
                "insurancePlanId": "c00f0e63-3787-4dff-8eb5-3f0a1e69acdd",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                "dateCreated": 1730473957,
                "averageReadingTime": null,
                "dateUpdated": 1730473957,
                "referralDate": 1730437200,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736803618
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "6a2963fb-e36f-47e6-ad9f-7ce9d61f1dc5",
                        "admissionDate": 1730473957,
                        "dischargeDate": null,
                        "primaryDoctorId": "f3db72ef-ba09-4d1f-8bfe-af88c6b205dd",
                        "patientId": "9bd4b465-a042-440a-8b45-579685c13f83",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1730473957,
                        "dateUpdated": 1730473957,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "298b3250-c54f-4534-9a57-7a1e1933eee2",
                        "startTime": 1736288283,
                        "endTime": 1736288343,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "The patient could not be reached and a voicemail was left encouraging patient to contact RN for information. ",
                        "patientId": "9bd4b465-a042-440a-8b45-579685c13f83",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "2ef452a5-569c-4ccf-832c-1e8061928685",
                        "startTime": 1736288328,
                        "endTime": 1736288330,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "9bd4b465-a042-440a-8b45-579685c13f83",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "b992dcdb-4c77-4922-98dc-4963beeb20ca",
                        "startTime": 1735935000,
                        "endTime": 1735935480,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "The patient reports that is sick. She was in to see PCP and has pneumonia. She is taking medication and has o2 at home. Avise  to check O2 stat and if SOB call 911,med or PCP. She will continue to check Bher P. Advise increase hydration and a heart-healthy diet. ",
                        "patientId": "9bd4b465-a042-440a-8b45-579685c13f83",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "bc1489d8-bb2e-4a4e-b420-1944e3cffa80",
                        "startTime": 1736232439,
                        "endTime": 1736232455,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "9bd4b465-a042-440a-8b45-579685c13f83",
                        "callerEmployeeId": "c3da5340-1c3e-4beb-a602-6fc1f5908219",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "09a3ac67-afed-4f6a-8df1-6e008ef9a4bd",
                    "mobile": "14699642540",
                    "fullName": "Pamela Carol Crocker"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 540,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735935000,
                    "duration": 480,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736288283,
                    "duration": 60,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 13
            }
        },
        {
            "patientProgressReportId": "0431501a-4125-4f27-b481-0a0a451923bc",
            "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 3,
            "lastReadingDate": 1736619763,
            "pAlert": 5,
            "readingPlusAlert": 8,
            "totalCallDurationSec": 2298,
            "auxiliaryDurationSec": 752,
            "lastEncounterDate": 1736815477,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 10.83,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "8 10 11",
            "listOfPAlertDates": "12 13 3 4 9",
            "expectedBill": 67,
            "appliedCPTCodes": "[\"99457\",\"99458\",\"99453\"]",
            "dayStatus": "[2,2,2,2,2,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                "patientType": "CHRONIC",
                "patientCode": 987,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-00987",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "74087122400",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "e5e67566-edea-4ec3-8341-246ba133a128",
                "insurancePlanId": "72bb8ee9-d821-44d3-9ca8-09cd504070e9",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1724256385,
                "averageReadingTime": null,
                "dateUpdated": 1724256385,
                "referralDate": 1724216400,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736619763
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "d02fc7fc-c399-4bdb-a49d-2a7fa8311e8a",
                        "admissionDate": 1724256385,
                        "dischargeDate": null,
                        "primaryDoctorId": "94837437-0e45-4d90-a941-a26c1e5ff197",
                        "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1724256385,
                        "dateUpdated": 1724256385,
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    }
                                ]
                            },
                            {
                                "orderable": {
                                    "orderableId": "9",
                                    "name": "Body Composition Analysis",
                                    "abbr": "BCA",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/8c7b8843-4f26-4f21-a5e5-e2ea5f993095/files-df2e73.svg",
                                    "times": "08:00,20:00",
                                    "instructions": "No instructions",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1714629710
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Weight",
                                            "resultableId": "29"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "1f2096fc-c0ea-4335-a410-9d2dfcaa28ab",
                        "startTime": 1736193900,
                        "endTime": 1736194500,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "call pathad TWC with patient sister she told me patient is still interested in doing the program and because she had changed her insurance n ow that they sort it out she is ready to go forward and we set up to do a demo tomorrow at 4pm, 01/06/2025.",
                        "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                        "callerEmployeeId": "54de902a-a953-42e4-a828-f5591d375b8b",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "24a3f11a-36e3-404f-afcb-ca1811920d55",
                        "startTime": 1736794960,
                        "endTime": 1736795020,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "The patient could not be reached and a voicemail was left for the support person encouraging the patient to retake their readings and to report any symptoms to the RN.",
                        "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "5443c820-02db-40a0-968c-99c5ce9c3f3c",
                        "startTime": 1736448018,
                        "endTime": 1736448036,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_CALL",
                        "comment": null,
                        "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                        "callerEmployeeId": "54de902a-a953-42e4-a828-f5591d375b8b",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "6f2fc953-769a-4924-a4c5-0c31cc99c82a",
                        "startTime": 1736794844,
                        "endTime": 1736795004,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "80d2503a-7556-4545-b04f-e4b3aeef8df5",
                        "startTime": 1736365500,
                        "endTime": 1736367180,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Patient support person and I had a TWC again patient support person call  to get her sister setup on the devices they had months ago i did the set up over the phone and also had her do the demonstrations to make sure the devices are working the readings for the bp came in  still waiting on the weight as i type we spent along time on the phone over 22  minutes, I also told her i will be calling periodically just to check in on Patient she said ok Patient support person also said patient might not do readings everyday but they will try. I told her ideally we would want a reading everyday but to do the best they can, patient respond was  \"I will try to do it everyday\"  I did the training and she said goodbye.",
                        "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                        "callerEmployeeId": "54de902a-a953-42e4-a828-f5591d375b8b",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "b6091487-6032-428b-8bd2-385989c0fe7b",
                        "startTime": 1736654879,
                        "endTime": 1736654901,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                        "callerEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    },
                    {
                        "callId": "d1e70f08-55ba-458d-b891-4165e0f6db4d",
                        "startTime": 1736795007,
                        "endTime": 1736795025,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "1634a5ca-8660-41c3-a0bf-ee34382b2129",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "ceb46159-5b42-46e7-afc3-fac53821ef19"
                    }
                ],
                "user": {
                    "userId": "e5e67566-edea-4ec3-8341-246ba133a128",
                    "mobile": "15186537070",
                    "fullName": "Diane Dymond"
                }
            },
            "daysToInactive": 12,
            "totalDuration": 2358,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736193900,
                    "duration": 600,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736365500,
                    "duration": 1698,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736794960,
                    "duration": 60,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 8
            }
        },
        {
            "patientProgressReportId": "0482f6c8-34f2-4d5b-8af9-7ab499e748a3",
            "patientId": "2e279ce6-d8b0-4acc-ba01-dcbdd4bf8651",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 7,
            "lastReadingDate": 1736776637,
            "pAlert": 5,
            "readingPlusAlert": 12,
            "totalCallDurationSec": 720,
            "auxiliaryDurationSec": 702,
            "lastEncounterDate": 1736776703,
            "sortCriteriaReading": 4,
            "sortCriteriaCalls": 3.7,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 5 6 9 12 13",
            "listOfPAlertDates": "10 11 3 4 8",
            "expectedBill": 25,
            "appliedCPTCodes": "[\"99457\"]",
            "dayStatus": "[1,1,2,2,1,1,2,2,1,2,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "2e279ce6-d8b0-4acc-ba01-dcbdd4bf8651",
                "patientType": "CHRONIC",
                "patientCode": 1378,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01378",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "95953338801",
                "groupNo": "none",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "7601b980-910f-4d1c-aba7-b4074a950b0e",
                "insurancePlanId": "6ac5d5e4-c53c-4bfc-9bba-df0e9ebd4216",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "83e5ec2e-7d44-43ed-9ca0-fb12a9e635e9",
                "dateCreated": 1730768878,
                "averageReadingTime": null,
                "dateUpdated": 1730768878,
                "referralDate": 1730350800,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736776637
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "e419f935-dff2-440e-8468-bbf96019177a",
                        "admissionDate": 1730768878,
                        "dischargeDate": null,
                        "primaryDoctorId": "ecffd74b-8aa0-4b8c-9acc-863c6a3045de",
                        "patientId": "2e279ce6-d8b0-4acc-ba01-dcbdd4bf8651",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1730768878,
                        "dateUpdated": 1730768878,
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "610a6d9a-ea7a-49d4-b07c-72879e30cea9",
                        "startTime": 1735845900,
                        "endTime": 1735846620,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Ms.Shelia battle was reached out , patient was asked about the medications , she explained that she has taken her blood pressure medication but she will be going to the pain management doctor soon .  She does have her blood pressure medication . she is feeling fine as of today .",
                        "patientId": "2e279ce6-d8b0-4acc-ba01-dcbdd4bf8651",
                        "callerEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    }
                ],
                "user": {
                    "userId": "7601b980-910f-4d1c-aba7-b4074a950b0e",
                    "mobile": "13189907775",
                    "fullName": "Shelia Battle"
                }
            },
            "daysToInactive": 13,
            "totalDuration": 720,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735845900,
                    "duration": 720,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 12
            }
        },
        {
            "patientProgressReportId": "0591e6b9-40b3-4da1-97f2-b31be43ebfd2",
            "patientId": "ec69eebd-7040-4c02-adbe-b6b1b3583c8c",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 6,
            "lastReadingDate": 1736706640,
            "pAlert": 6,
            "readingPlusAlert": 12,
            "totalCallDurationSec": 900,
            "auxiliaryDurationSec": 1266,
            "lastEncounterDate": 1736617426,
            "sortCriteriaReading": 4,
            "sortCriteriaCalls": 16.1,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "2 3 6 7 9 12",
            "listOfPAlertDates": "10 11 13 4 5 8",
            "expectedBill": 25,
            "appliedCPTCodes": "[\"99457\"]",
            "dayStatus": "[2,1,1,2,2,1,1,2,1,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "ec69eebd-7040-4c02-adbe-b6b1b3583c8c",
                "patientType": "CHRONIC",
                "patientCode": 1110,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01110",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "31889471",
                "groupNo": "tx113",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "f217726f-e857-443b-a7fc-8f85da10b748",
                "insurancePlanId": "2c5d8a66-17ac-426f-afcb-8d337dc1682a",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "afa22689-dbe2-4585-a563-3383bac2ba4e",
                "dateCreated": 1727217298,
                "averageReadingTime": null,
                "dateUpdated": 1727217298,
                "referralDate": 1727154000,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736706640
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "2712b4cf-059f-4dae-8ec5-4e83676a1f8a",
                        "admissionDate": 1727217298,
                        "dischargeDate": null,
                        "primaryDoctorId": "ecffd74b-8aa0-4b8c-9acc-863c6a3045de",
                        "patientId": "ec69eebd-7040-4c02-adbe-b6b1b3583c8c",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1727217298,
                        "dateUpdated": 1727217298,
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "188a71d1-0938-4b5e-8967-5578173dd1e4",
                        "startTime": 1736196900,
                        "endTime": 1736197140,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "We had a brief conversation over the phone regarding the blood pressure readings , Mr.Keith said he is doing good no sign of any discomfort. He was asked to confirm the device serial number but he did not have the box or was able to confirm fro the device. he will be sending the picture on my phone he said.",
                        "patientId": "ec69eebd-7040-4c02-adbe-b6b1b3583c8c",
                        "callerEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    },
                    {
                        "callId": "21675056-986b-4df9-8f31-867950076570",
                        "startTime": 1735935600,
                        "endTime": 1735936020,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "patient was reached out via text in accordance to his blood pressure readings.the patient replied by saying I feeling fine and I have taken my medication for today.",
                        "patientId": "ec69eebd-7040-4c02-adbe-b6b1b3583c8c",
                        "callerEmployeeId": "7f9be7b3-98a9-4eb1-bea4-ebe7dffdb70e",
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9"
                    }
                ],
                "user": {
                    "userId": "f217726f-e857-443b-a7fc-8f85da10b748",
                    "mobile": "12146043133",
                    "fullName": "Keith Johnson"
                }
            },
            "daysToInactive": 13,
            "totalDuration": 660,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735935600,
                    "duration": 420,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736196900,
                    "duration": 240,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 12
            }
        },
        {
            "patientProgressReportId": "05c4d640-70c1-4fd6-84ab-abe4350902ec",
            "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 8,
            "lastReadingDate": 1736795161,
            "pAlert": 3,
            "readingPlusAlert": 11,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 842,
            "lastEncounterDate": 1736551716,
            "sortCriteriaReading": 5,
            "sortCriteriaCalls": 14.03,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "4 6 7 8 10 11 12 13",
            "listOfPAlertDates": "3 5 9",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,2,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                "patientType": "CHRONIC",
                "patientCode": 162,
                "pin": "4a7d1ed414474e4033ac29ccb8653d9b",
                "isPinSet": true,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": "Farah",
                "caregiverLastName": "Patel",
                "caregiverRelation": "Daughter",
                "caregiverMobile": "12143927863",
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-00162",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": true,
                "flag": false,
                "doctorNotes": "patient inactive, relies on caregiver for support and cannot continue per their guardian - ASM",
                "admissionStatus": "DISCHARGED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "34102010",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "4f2d5701-d51a-476d-9278-febc0e6e1cea",
                "insurancePlanId": "9d1a0bef-495f-4e6c-9c32-f8c353c8bf5d",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": null,
                "averageReadingTime": null,
                "dateUpdated": null,
                "referralDate": 1692647404,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736795161
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "c1d0ec93-5c86-410a-a2e0-5b796fff2461",
                        "admissionDate": 1717692788,
                        "dischargeDate": null,
                        "primaryDoctorId": "17ccd3cc-3876-4f6f-aa27-f86450f7f754",
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1717692788,
                        "dateUpdated": 1717692788,
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "1077682b-56a5-4102-a410-6374e10e5d03",
                        "startTime": 1736367056,
                        "endTime": 1736367061,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "bfc5bbee-f9b1-4b72-a3b2-2282290e3948",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "1195db96-d2a0-4e8d-9985-611e590e2a7d",
                        "startTime": 1736551636,
                        "endTime": 1736551715,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "2d947879-9776-4634-80b2-cb0c0653bc1a",
                        "startTime": 1735690414,
                        "endTime": 1735690417,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "48c9316d-5aed-4b4d-a667-46622d3db2da",
                        "startTime": 1736384225,
                        "endTime": 1736384231,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "5d163c70-49ff-46e8-99dc-af486c9962cb",
                        "startTime": 1736299881,
                        "endTime": 1736299884,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "631f6f97-c4f2-4358-85ff-af5c0df6e7c9",
                        "startTime": 1735690410,
                        "endTime": 1735690412,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "a1359fd1-4ed2-49fc-aac8-922e82a238a7",
                        "startTime": 1736198541,
                        "endTime": 1736198601,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "The patient's daughter/support-person was messaged regarding the patient's elevated reading and was provided patient panel education on healthy eating and limiting caffeine in addition to medication adherence. Will continue to monitor incoming readings. ",
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "b82b7874-7f6b-484a-95a4-e302332222c4",
                        "startTime": 1736299886,
                        "endTime": 1736299888,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "bba026de-eb8a-4d11-9056-57fb9727f917",
                        "startTime": 1736290581,
                        "endTime": 1736290586,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "bfc5bbee-f9b1-4b72-a3b2-2282290e3948",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "c489d537-d339-45ce-8adf-22a764a572fc",
                        "startTime": 1736532842,
                        "endTime": 1736532859,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "bfc5bbee-f9b1-4b72-a3b2-2282290e3948",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "d2abe1f6-259d-4d4f-bdc1-3a2388efc910",
                        "startTime": 1736551716,
                        "endTime": 1736551718,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "dd58245a-9502-4b17-8a28-476a6bcd779f",
                        "startTime": 1736384233,
                        "endTime": 1736384234,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "d0012fb9-b41d-481b-93ed-47fc56e35858",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    }
                ],
                "user": {
                    "userId": "4f2d5701-d51a-476d-9278-febc0e6e1cea",
                    "mobile": "12145663284",
                    "fullName": "Noorallah Laljee"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 60,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736198541,
                    "duration": 60,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 11
            }
        },
        {
            "patientProgressReportId": "061d3e43-bed2-425f-8742-afed4bd444e8",
            "patientId": "be511d94-ac3f-4034-b2e9-32d338aa63f4",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 9,
            "lastReadingDate": 1736750476,
            "pAlert": 3,
            "readingPlusAlert": 12,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 1279,
            "lastEncounterDate": 1736811920,
            "sortCriteriaReading": 4,
            "sortCriteriaCalls": 1.32,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 4 5 6 7 9 11 13",
            "listOfPAlertDates": "10 12 3",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[1,1,2,1,1,1,1,2,1,2,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "be511d94-ac3f-4034-b2e9-32d338aa63f4",
                "patientType": "CHRONIC",
                "patientCode": 349,
                "pin": "c913303f392ffc643f7240b180602652",
                "isPinSet": true,
                "insuranceStatus": "COPAY",
                "copayAmount": 15,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": 170,
                "age": null,
                "hospitalNo": "RPM-00349",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": true,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "U2192546101",
                "groupNo": "3174696",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "c4901733-ec7f-4852-9b53-cc545540f1ad",
                "insurancePlanId": "8566c850-b21b-47ca-840d-674eee03fe6e",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": null,
                "averageReadingTime": null,
                "dateUpdated": null,
                "referralDate": 1700241594,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736750476
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "6a97d8e1-2641-4922-8f90-f8e5f20957be",
                        "admissionDate": 1700241594,
                        "dischargeDate": null,
                        "primaryDoctorId": "17ccd3cc-3876-4f6f-aa27-f86450f7f754",
                        "patientId": "be511d94-ac3f-4034-b2e9-32d338aa63f4",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1700241594,
                        "dateUpdated": 1700241594,
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "57454d0e-dd03-413f-ba99-ae4b19d1a12d",
                        "startTime": 1736547248,
                        "endTime": 1736547308,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "called,lvm ",
                        "patientId": "be511d94-ac3f-4034-b2e9-32d338aa63f4",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "8421b0ff-44c0-462e-bafd-9fc2d47b567f",
                        "startTime": 1735929544,
                        "endTime": 1735929604,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "called and LVM. sent text",
                        "patientId": "be511d94-ac3f-4034-b2e9-32d338aa63f4",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    }
                ],
                "user": {
                    "userId": "c4901733-ec7f-4852-9b53-cc545540f1ad",
                    "mobile": "19728395316",
                    "fullName": "Heather Ann Leon"
                }
            },
            "daysToInactive": 13,
            "totalDuration": 120,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735929544,
                    "duration": 60,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736547248,
                    "duration": 60,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 12
            }
        },
        {
            "patientProgressReportId": "06258787-608f-4f37-a817-06d445c21997",
            "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 8,
            "lastReadingDate": 1736791639,
            "pAlert": 2,
            "readingPlusAlert": 10,
            "totalCallDurationSec": 60,
            "auxiliaryDurationSec": 754,
            "lastEncounterDate": 1736818112,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 13.57,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "3 4 5 7 9 10 11 13",
            "listOfPAlertDates": "6 8",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                "patientType": "CHRONIC",
                "patientCode": 986,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-00986",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "wife's callback number 469-358-1741",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "5UW3RQ1VR00",
                "groupNo": "04412",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "5d559f46-7f67-4044-9a4e-a6db50e27c59",
                "insurancePlanId": "baae8675-fc52-4fc5-a8c7-2e2aff017727",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1724184019,
                "averageReadingTime": null,
                "dateUpdated": 1724184019,
                "referralDate": 1724043600,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736791639
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "13eb8669-de1e-4586-8d01-75e30a7de40d",
                        "admissionDate": 1724184019,
                        "dischargeDate": null,
                        "primaryDoctorId": "8f2f514e-24cb-4982-a27a-9fe071710210",
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1724184019,
                        "dateUpdated": 1724184019,
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "112da632-b298-480e-acad-6d36def5c538",
                        "startTime": 1735947678,
                        "endTime": 1735947738,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Escalated to RN",
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "357e315c-eda6-49aa-b2d0-fceb30b9dc20",
                        "startTime": 1736366700,
                        "endTime": 1736366760,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Called the patient for a FU. The support person responded and said that he is doing good and also walking around but she thinks he gets a bit unstable but he is doing ok. He is going for his next appointment this month.",
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "3a049700-3e83-4aa6-85b9-d4d687812785",
                        "startTime": 1736191048,
                        "endTime": 1736191050,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "4dd918dc-02e9-4ee5-b044-43559811bb1d",
                        "startTime": 1736213517,
                        "endTime": 1736213528,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "8246133a-536f-45e5-ade7-8e9541eab698",
                        "startTime": 1736191042,
                        "endTime": 1736191047,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "a1b5745c-f130-4749-a371-e7ac0acd045f",
                        "startTime": 1736193524,
                        "endTime": 1736193541,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "b81461cc-e8ac-48b6-a62b-32934312ef35",
                        "startTime": 1736193545,
                        "endTime": 1736193605,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Escalated the BP reading to the RN.",
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "cc5370c7-0368-4fe3-9bfb-3c9e45616a4c",
                        "startTime": 1736213532,
                        "endTime": 1736213533,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "e8d26466-f460-4080-b2ac-673236f4097f",
                        "startTime": 1735947655,
                        "endTime": 1735947672,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "58d3548a-4d54-4940-8712-1d4dc0fbe933",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    }
                ],
                "user": {
                    "userId": "5d559f46-7f67-4044-9a4e-a6db50e27c59",
                    "mobile": "14693581741",
                    "fullName": "Yousef Saadi"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 180,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735947678,
                    "duration": 60,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736193545,
                    "duration": 60,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736366700,
                    "duration": 60,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 10
            }
        },
        {
            "patientProgressReportId": "063e632c-f579-47f4-90c6-f74bcca546fc",
            "patientId": "1fb1e573-a292-4eb8-8a32-db4060a987d1",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 0,
            "lastReadingDate": null,
            "pAlert": 4,
            "readingPlusAlert": 4,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 180,
            "lastEncounterDate": 1736534407,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 3,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "",
            "listOfPAlertDates": "10 11 12 3",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "1fb1e573-a292-4eb8-8a32-db4060a987d1",
                "patientType": "CHRONIC",
                "patientCode": 1244,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01244",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ASSIGNED",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "6A71Q60EA36",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "25177858-62ee-49da-91ed-899af9274eb8",
                "insurancePlanId": "c00f0e63-3787-4dff-8eb5-3f0a1e69acdd",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                "dateCreated": 1729183875,
                "averageReadingTime": null,
                "dateUpdated": 1729183875,
                "referralDate": 1729141200,
                "orderableValues": [],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "0006c291-7aa2-4ae2-a840-907148da2c8f",
                        "admissionDate": 1729183875,
                        "dischargeDate": null,
                        "primaryDoctorId": "24942dea-bb73-4f8f-add1-40898ad768b0",
                        "patientId": "1fb1e573-a292-4eb8-8a32-db4060a987d1",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1729183875,
                        "dateUpdated": 1729183875,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "553030f5-8129-4d47-8b7d-0ad749d8f0f2",
                        "startTime": 1735836954,
                        "endTime": 1735837014,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Called the patient and left a vm",
                        "patientId": "1fb1e573-a292-4eb8-8a32-db4060a987d1",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "b930d80c-3320-4df3-9db7-a081aa3f2b98",
                        "startTime": 1736534407,
                        "endTime": 1736534467,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": null,
                        "patientId": "1fb1e573-a292-4eb8-8a32-db4060a987d1",
                        "callerEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    },
                    {
                        "callId": "d177066f-6ce0-4daa-8731-6c0c1951d9e4",
                        "startTime": 1736179174,
                        "endTime": 1736179234,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": null,
                        "patientId": "1fb1e573-a292-4eb8-8a32-db4060a987d1",
                        "callerEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "25177858-62ee-49da-91ed-899af9274eb8",
                    "mobile": "12144754620",
                    "fullName": "Andrew Halusek"
                }
            },
            "daysToInactive": "-",
            "totalDuration": 180,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735836954,
                    "duration": 60,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736179174,
                    "duration": 60,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736534407,
                    "duration": 60,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "0",
                "readingModels": [
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 1,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 2,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 3,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 4,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 5,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 6,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 7,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 8,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 9,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 10,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 11,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 12,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 13,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 14,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 15,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 16,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 17,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 18,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 19,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 20,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 21,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 22,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 23,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 24,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 25,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 26,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 27,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 28,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 29,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 30,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 31,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 1
            }
        },
        {
            "patientProgressReportId": "06d55bb0-4a70-4aec-a215-3c6168055b0b",
            "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 9,
            "lastReadingDate": 1736818291,
            "pAlert": 0,
            "readingPlusAlert": 9,
            "totalCallDurationSec": 60,
            "auxiliaryDurationSec": 320,
            "lastEncounterDate": 1736472554,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 6.33,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "5 6 7 8 9 10 11 12 13",
            "listOfPAlertDates": "",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                "patientType": "CHRONIC",
                "patientCode": 897,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": 157,
                "age": null,
                "hospitalNo": "RPM-00897",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": true,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "98772563300",
                "groupNo": "74453",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "5272f54a-f072-407a-9a8d-d872e66ee76b",
                "insurancePlanId": "aece2ea3-ab49-41f1-aff2-4e2810a1dbb4",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1721684912,
                "averageReadingTime": null,
                "dateUpdated": 1721684912,
                "referralDate": 1721624400,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736818291
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "e03c4f93-f063-4750-b606-d26f636dd3c5",
                        "admissionDate": 1721684912,
                        "dischargeDate": null,
                        "primaryDoctorId": "17ccd3cc-3876-4f6f-aa27-f86450f7f754",
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1721684912,
                        "dateUpdated": 1721684912,
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "1bb5b920-506a-41d7-b37e-ee9d80398e0f",
                        "startTime": 1736472550,
                        "endTime": 1736472552,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "2b85ef86-bcc2-4a10-b544-73e715baaca2",
                        "startTime": 1736379394,
                        "endTime": 1736379397,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "4bc5cc6d-771e-40c7-85a4-f17f403b961d",
                        "startTime": 1736469277,
                        "endTime": 1736469337,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Attempted to reach pt for follow up. Sent a text message",
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "callerEmployeeId": "bfc5bbee-f9b1-4b72-a3b2-2282290e3948",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "a12503d0-957e-492d-ad38-b307dd18610f",
                        "startTime": 1736469293,
                        "endTime": 1736469302,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "callerEmployeeId": "bfc5bbee-f9b1-4b72-a3b2-2282290e3948",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "ae982a69-a474-4bda-ab69-7167ee9d65bc",
                        "startTime": 1736472554,
                        "endTime": 1736472556,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "c0b0ae19-3e2f-4d8c-94de-1e5372180ab2",
                        "startTime": 1736357807,
                        "endTime": 1736357818,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "callerEmployeeId": "bfc5bbee-f9b1-4b72-a3b2-2282290e3948",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "e75f32a6-a5c6-434b-a7cb-c02dc81655e6",
                        "startTime": 1736469960,
                        "endTime": 1736470020,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Patient responded to fu text message stating everything was going well. He expressed no further concerns at this time.",
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "callerEmployeeId": "bfc5bbee-f9b1-4b72-a3b2-2282290e3948",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "e7957166-4712-43d9-b5f6-36379e1ad15d",
                        "startTime": 1736379399,
                        "endTime": 1736379401,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "da34d289-e927-4294-a5df-71925a0777a9",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    }
                ],
                "user": {
                    "userId": "5272f54a-f072-407a-9a8d-d872e66ee76b",
                    "mobile": "14099898598",
                    "fullName": "Akbarali Rehamani"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 120,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736469960,
                    "duration": 120,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 9
            }
        },
        {
            "patientProgressReportId": "06efb928-8947-4842-b883-d3ebe6aae8f8",
            "patientId": "7107a304-c388-4655-9263-b3c5ecdab364",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 0,
            "lastReadingDate": null,
            "pAlert": 6,
            "readingPlusAlert": 6,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 631,
            "lastEncounterDate": 1736791878,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 10.52,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "",
            "listOfPAlertDates": "3 4 5 6 7 8",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "7107a304-c388-4655-9263-b3c5ecdab364",
                "patientType": "CHRONIC",
                "patientCode": 528,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 40,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "Spanish",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-00528",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "OSC7858037602",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "9784ded8-3e45-4fd9-93fe-05e592a3d3b9",
                "insurancePlanId": "64ce369c-ac19-4446-8936-f4cd5c1a5185",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1713467597,
                "averageReadingTime": null,
                "dateUpdated": 1713467597,
                "referralDate": 1713416400,
                "orderableValues": [
                    {
                        "acquisitionTime": 1734535175
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "84d6bcab-ddba-484a-a961-23d97c50b0bb",
                        "admissionDate": 1713467597,
                        "dischargeDate": null,
                        "primaryDoctorId": "17ccd3cc-3876-4f6f-aa27-f86450f7f754",
                        "patientId": "7107a304-c388-4655-9263-b3c5ecdab364",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1713467597,
                        "dateUpdated": 1713467597,
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "06a6c166-050c-420c-bce4-4dc668ac6b9a",
                        "startTime": 1736367949,
                        "endTime": 1736368009,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "call went to vm let vm",
                        "patientId": "7107a304-c388-4655-9263-b3c5ecdab364",
                        "callerEmployeeId": "54de902a-a953-42e4-a828-f5591d375b8b",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "3ba4c87a-7071-49c3-92c8-c93e34b785f6",
                        "startTime": 1736196449,
                        "endTime": 1736196509,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "call,lvm",
                        "patientId": "7107a304-c388-4655-9263-b3c5ecdab364",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "76cab557-c157-4f4e-8088-223133122cf9",
                        "startTime": 1736791824,
                        "endTime": 1736791884,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Called the patient and left a vm.",
                        "patientId": "7107a304-c388-4655-9263-b3c5ecdab364",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    },
                    {
                        "callId": "d1749be0-fae1-4310-a89e-59eaa1ea6d4f",
                        "startTime": 1736531852,
                        "endTime": 1736531912,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "called,lvm",
                        "patientId": "7107a304-c388-4655-9263-b3c5ecdab364",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "45059bd9-f515-4a61-901c-57aa6a639a18"
                    }
                ],
                "user": {
                    "userId": "9784ded8-3e45-4fd9-93fe-05e592a3d3b9",
                    "mobile": "16825527435",
                    "fullName": "Esperanza Salazar"
                }
            },
            "daysToInactive": 0,
            "totalDuration": 240,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736196449,
                    "duration": 60,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736367949,
                    "duration": 60,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736531852,
                    "duration": 60,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736791824,
                    "duration": 60,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "0",
                "readingModels": [
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 1,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 2,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 3,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 4,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 5,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 6,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 7,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 8,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 9,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 10,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 11,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 12,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 13,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 14,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 15,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 16,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 17,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 18,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 19,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 20,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 21,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 22,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 23,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 24,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 25,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 26,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 27,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 28,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 29,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 30,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 31,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 1
            }
        },
        {
            "patientProgressReportId": "078b8aff-181d-4c76-ab2d-27608ce1ce79",
            "patientId": "c1333e92-c607-4168-8a27-ccb49e308306",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 11,
            "lastReadingDate": 1736698818,
            "pAlert": 0,
            "readingPlusAlert": 11,
            "totalCallDurationSec": 300,
            "auxiliaryDurationSec": 902,
            "lastEncounterDate": 1736796819,
            "sortCriteriaReading": 5,
            "sortCriteriaCalls": 0.03,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 3 4 5 6 7 9 10 11 12",
            "listOfPAlertDates": "",
            "expectedBill": 20,
            "appliedCPTCodes": "[\"99457\"]",
            "dayStatus": "[1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "c1333e92-c607-4168-8a27-ccb49e308306",
                "patientType": "CHRONIC",
                "patientCode": 1424,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01424",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "H04703329",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "8d0d50eb-bda8-4912-81e2-18c8cd5073bd",
                "insurancePlanId": "9d1a0bef-495f-4e6c-9c32-f8c353c8bf5d",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                "dateCreated": 1730998557,
                "averageReadingTime": null,
                "dateUpdated": 1730998557,
                "referralDate": 1730959200,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736698818
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "c1743e65-b054-4018-a540-27db78bf91ef",
                        "admissionDate": 1730998557,
                        "dischargeDate": null,
                        "primaryDoctorId": "f3db72ef-ba09-4d1f-8bfe-af88c6b205dd",
                        "patientId": "c1333e92-c607-4168-8a27-ccb49e308306",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1730998557,
                        "dateUpdated": 1730998557,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "947f1e3f-110d-4bf7-b6ef-976755922b67",
                        "startTime": 1736796360,
                        "endTime": 1736796660,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "The patient reports he is doing well. He has no questions or concerns at the moment. We discussed his biometric data and discussed a heart-healthy diet. ",
                        "patientId": "c1333e92-c607-4168-8a27-ccb49e308306",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "8d0d50eb-bda8-4912-81e2-18c8cd5073bd",
                    "mobile": "2144189501",
                    "fullName": "William Smith"
                }
            },
            "daysToInactive": 12,
            "totalDuration": 300,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736796360,
                    "duration": 300,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 11
            }
        },
        {
            "patientProgressReportId": "079ca9b3-0899-4011-923f-122e30020225",
            "patientId": "05b043d8-4c12-4841-b070-e3c1bd2bd9c2",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 0,
            "lastReadingDate": null,
            "pAlert": 6,
            "readingPlusAlert": 6,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 60,
            "lastEncounterDate": 1735837106,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 1,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "",
            "listOfPAlertDates": "10 5 6 7 8 9",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "05b043d8-4c12-4841-b070-e3c1bd2bd9c2",
                "patientType": "CHRONIC",
                "patientCode": 798,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-00798",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ASSIGNED",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "BSW110668401",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "4bcc50fa-0bd9-46c7-b403-70ccc99d542c",
                "insurancePlanId": "387979ff-bf16-414e-909f-fa2679417aea",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1719360288,
                "averageReadingTime": null,
                "dateUpdated": 1719360288,
                "referralDate": 1719288000,
                "orderableValues": [],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "1a4e8f4b-c742-4668-809e-ba1695c8fc62",
                        "admissionDate": 1719360288,
                        "dischargeDate": null,
                        "primaryDoctorId": "2c6b6b50-1846-4c89-94b9-964e140a068a",
                        "patientId": "05b043d8-4c12-4841-b070-e3c1bd2bd9c2",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1719360288,
                        "dateUpdated": 1719360288,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "dc5673a6-d57e-4a2a-b2a1-11d8e8ebb4cf",
                        "startTime": 1735837106,
                        "endTime": 1735837166,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Called the patient and left a vm.",
                        "patientId": "05b043d8-4c12-4841-b070-e3c1bd2bd9c2",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "4bcc50fa-0bd9-46c7-b403-70ccc99d542c",
                    "mobile": "14692266031",
                    "fullName": "Sharif Sharifullah"
                }
            },
            "daysToInactive": "-",
            "totalDuration": 60,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735837106,
                    "duration": 60,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "0",
                "readingModels": [
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 1,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 2,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 3,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 4,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 5,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 6,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 7,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 8,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 9,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 10,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 11,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 12,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 13,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 14,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 15,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 16,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 17,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 18,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 19,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 20,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 21,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 22,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 23,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 24,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 25,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 26,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 27,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 28,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 29,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 30,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 31,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 1
            }
        },
        {
            "patientProgressReportId": "08318c9c-8aa4-4f9d-a150-92887003811f",
            "patientId": "4bcffdff-ea3b-46a4-8bbb-93f650a7c17a",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 11,
            "lastReadingDate": 1736799787,
            "pAlert": 1,
            "readingPlusAlert": 12,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 249,
            "lastEncounterDate": 1736800711,
            "sortCriteriaReading": 4,
            "sortCriteriaCalls": 4.15,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "2 3 4 5 7 8 9 10 11 12 13",
            "listOfPAlertDates": "6",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "4bcffdff-ea3b-46a4-8bbb-93f650a7c17a",
                "patientType": "CHRONIC",
                "patientCode": 1238,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01238",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "10169617040",
                "groupNo": "00",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "0810a627-6012-4834-8e12-0191403550c7",
                "insurancePlanId": "2fb6cd21-53c5-47a9-857b-932b895ce6b8",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "afa22689-dbe2-4585-a563-3383bac2ba4e",
                "dateCreated": 1729110057,
                "averageReadingTime": null,
                "dateUpdated": 1729110057,
                "referralDate": 1728968400,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736799787
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "8118fa9a-76f2-4294-9e05-3005482736ba",
                        "admissionDate": 1729110057,
                        "dischargeDate": null,
                        "primaryDoctorId": "ecffd74b-8aa0-4b8c-9acc-863c6a3045de",
                        "patientId": "4bcffdff-ea3b-46a4-8bbb-93f650a7c17a",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1729110057,
                        "dateUpdated": 1729110057,
                        "healthcareFacilityId": "c45c0884-6ae1-477a-827b-cbfc11b61ac9",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [],
                "user": {
                    "userId": "0810a627-6012-4834-8e12-0191403550c7",
                    "mobile": "14698785569",
                    "fullName": "Myron Busby"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 0,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 12
            }
        },
        {
            "patientProgressReportId": "083dbf14-b3c1-4a5b-95e7-d0076d96ebd9",
            "patientId": "ea86999c-9432-4894-b3a7-916106a12613",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 4,
            "lastReadingDate": 1736471533,
            "pAlert": 4,
            "readingPlusAlert": 8,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 249,
            "lastEncounterDate": 1736466544,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 4.15,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "3 4 8 9",
            "listOfPAlertDates": "10 11 12 13",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,1,1,2,2,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "ea86999c-9432-4894-b3a7-916106a12613",
                "patientType": "CHRONIC",
                "patientCode": 955,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-00955",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "WZW100011396056",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "04730f72-cfbb-44b1-8cc5-24b94d499ebe",
                "insurancePlanId": "d67bdbba-bb40-4506-bfb7-bd390dd0071b",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1723133080,
                "averageReadingTime": null,
                "dateUpdated": 1723133080,
                "referralDate": 1723093200,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736471533
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "18567ace-b883-4da3-a677-605f4a2d2468",
                        "admissionDate": 1723133080,
                        "dischargeDate": null,
                        "primaryDoctorId": "4f5fd0a0-6098-4762-ba0f-903c6d974b91",
                        "patientId": "ea86999c-9432-4894-b3a7-916106a12613",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1723133080,
                        "dateUpdated": 1723133080,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "02a485b5-bcb8-46b6-8bc2-826c07bcfc54",
                        "startTime": 1735863448,
                        "endTime": 1735863508,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "called and LVM. Patient needs an orderable added ",
                        "patientId": "ea86999c-9432-4894-b3a7-916106a12613",
                        "callerEmployeeId": "758accdf-91bb-4462-b84e-26bc0aba18fb",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "04730f72-cfbb-44b1-8cc5-24b94d499ebe",
                    "mobile": "14695369936",
                    "fullName": "Byron Thomas"
                }
            },
            "daysToInactive": 10,
            "totalDuration": 60,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1735863448,
                    "duration": 60,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 8
            }
        },
        {
            "patientProgressReportId": "086f27f7-6b1d-4bca-b7f0-82a40f40978d",
            "patientId": "83ac8895-3680-40f1-a549-9e8eb794c52b",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 0,
            "lastReadingDate": null,
            "pAlert": 6,
            "readingPlusAlert": 6,
            "totalCallDurationSec": 120,
            "auxiliaryDurationSec": 290,
            "lastEncounterDate": 1736512874,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 6.83,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "",
            "listOfPAlertDates": "1 2 3 4 5 6",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "83ac8895-3680-40f1-a549-9e8eb794c52b",
                "patientType": "CHRONIC",
                "patientCode": 899,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": "Mubarak",
                "caregiverLastName": "Ali",
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "Urdu",
                "followUpStatus": "Call List",
                "height": 177,
                "age": null,
                "hospitalNo": "RPM-00899",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": true,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "8",
                "groupNo": "1",
                "secondaryMemberId": "00C",
                "secondaryGroupNo": "00D",
                "userId": "1ca876cd-d436-4336-ad98-bc1f41b0fb4f",
                "insurancePlanId": "87f00f77-9cb7-4720-b975-5e1fbddf7284",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": "87f00f77-9cb7-4720-b975-5e1fbddf7284",
                "healthcareFacilityId": "364e1f20-88d0-44bd-8c3c-8d427286e4ef",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1721826262,
                "averageReadingTime": null,
                "dateUpdated": 1721826262,
                "referralDate": 1721761200,
                "orderableValues": [
                    {
                        "acquisitionTime": 1735026594
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "e1e39854-1852-43f7-a776-d7d749acb333",
                        "admissionDate": 1721826262,
                        "dischargeDate": null,
                        "primaryDoctorId": "ed2baa73-5270-46db-b01b-69ac74d26f9c",
                        "patientId": "83ac8895-3680-40f1-a549-9e8eb794c52b",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1721826262,
                        "dateUpdated": 1721826262,
                        "healthcareFacilityId": "364e1f20-88d0-44bd-8c3c-8d427286e4ef",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "5",
                                    "name": "Temperature",
                                    "abbr": "TEMP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Temp-2 (1)-f615ca.svg",
                                    "times": "08:00,20:00",
                                    "instructions": "No instructions",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1685595964
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Temperature",
                                            "resultableId": "25"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "MODE",
                                            "resultableId": "999"
                                        }
                                    }
                                ]
                            },
                            {
                                "orderable": {
                                    "orderableId": "9",
                                    "name": "Body Composition Analysis",
                                    "abbr": "BCA",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/8c7b8843-4f26-4f21-a5e5-e2ea5f993095/files-df2e73.svg",
                                    "times": "08:00,20:00",
                                    "instructions": "No instructions",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1714629710
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Bone Mass",
                                            "resultableId": "107"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Body Fat Rate",
                                            "resultableId": "106"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Fat Weight",
                                            "resultableId": "61"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Water Content",
                                            "resultableId": "108"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Weight",
                                            "resultableId": "29"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "BMI",
                                            "resultableId": "30"
                                        }
                                    }
                                ]
                            },
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "cda473b9-b6f5-4fac-82fb-48dfa0ccd8f9",
                        "startTime": 1736512625,
                        "endTime": 1736512685,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "missed call",
                        "patientId": "83ac8895-3680-40f1-a549-9e8eb794c52b",
                        "callerEmployeeId": "123dcc81-6c70-4f5f-bc6f-3ecf90800843",
                        "healthcareFacilityId": "364e1f20-88d0-44bd-8c3c-8d427286e4ef"
                    },
                    {
                        "callId": "e26c8352-3b6e-420b-9eda-d57905dd374c",
                        "startTime": 1736512620,
                        "endTime": 1736512740,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "follow-up report",
                        "patientId": "83ac8895-3680-40f1-a549-9e8eb794c52b",
                        "callerEmployeeId": "123dcc81-6c70-4f5f-bc6f-3ecf90800843",
                        "healthcareFacilityId": "364e1f20-88d0-44bd-8c3c-8d427286e4ef"
                    },
                    {
                        "callId": "fd6ecea0-21ec-4213-9165-0514c0e32703",
                        "startTime": 1736512744,
                        "endTime": 1736512764,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "83ac8895-3680-40f1-a549-9e8eb794c52b",
                        "callerEmployeeId": "123dcc81-6c70-4f5f-bc6f-3ecf90800843",
                        "healthcareFacilityId": "364e1f20-88d0-44bd-8c3c-8d427286e4ef"
                    }
                ],
                "user": {
                    "userId": "1ca876cd-d436-4336-ad98-bc1f41b0fb4f",
                    "mobile": "923130518168",
                    "fullName": "Faraz Khan"
                }
            },
            "daysToInactive": 0,
            "totalDuration": 180,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736512620,
                    "duration": 180,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "0",
                "readingModels": [
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 1,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 2,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 3,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 4,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 5,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 6,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 7,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 8,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 9,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 10,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 11,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 12,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 13,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 14,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 15,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 16,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 17,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 18,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 19,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 20,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 21,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 22,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 23,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 24,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 25,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 26,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 27,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 28,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 29,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 30,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 0,
                        "dailyReadingStatus": 0,
                        "day": 31,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 1
            }
        },
        {
            "patientProgressReportId": "086f87e9-b6a8-4990-a5ec-f09c52b5e21d",
            "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 2,
            "lastReadingDate": 1736791367,
            "pAlert": 5,
            "readingPlusAlert": 7,
            "totalCallDurationSec": 0,
            "auxiliaryDurationSec": 1589,
            "lastEncounterDate": 1736816870,
            "sortCriteriaReading": 90,
            "sortCriteriaCalls": 6.48,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "12 13",
            "listOfPAlertDates": "10 11 3 4 6",
            "expectedBill": 0,
            "appliedCPTCodes": "[]",
            "dayStatus": "[2,2,2,2,2,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                "patientType": "CHRONIC",
                "patientCode": 898,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "COPAY",
                "copayAmount": 0,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": null,
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-00898",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "H59395883",
                "groupNo": "none",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "d4ae8283-c454-4e94-9c30-b1fa471d50ed",
                "insurancePlanId": "709b4ea9-c378-408e-b19a-a47daa8269ca",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": null,
                "dateCreated": 1721768208,
                "averageReadingTime": null,
                "dateUpdated": 1721768208,
                "referralDate": 1721710800,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736791458
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "12b94bf3-3eec-4264-a0f8-de4c29802df8",
                        "admissionDate": 1721768208,
                        "dischargeDate": null,
                        "primaryDoctorId": "8f2f514e-24cb-4982-a27a-9fe071710210",
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1721768208,
                        "dateUpdated": 1721768208,
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "025aa478-04da-49bd-8f1e-087c95871b54",
                        "startTime": 1736790302,
                        "endTime": 1736790362,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Escalated the BP reading to the RN. Called the patient and left a vm",
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "1ec02a0c-b5c4-4871-ac08-47554d969188",
                        "startTime": 1736535967,
                        "endTime": 1736536027,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Called the patient and left a vm.",
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "24581ac3-7ea7-4c82-a672-de0e82bbecc4",
                        "startTime": 1736441285,
                        "endTime": 1736441345,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Sent a text via CHARMS",
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "268ef8b3-125a-4779-bb02-3371cd9491f3",
                        "startTime": 1736188604,
                        "endTime": 1736188664,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Called the patient and left a vm.",
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "4a61ff07-485e-4e4d-aa25-9904943067a2",
                        "startTime": 1736796647,
                        "endTime": 1736796707,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Escalated to RN",
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "5afd9560-6127-45a9-bf9f-1e5c49f4fc74",
                        "startTime": 1736816263,
                        "endTime": 1736816265,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "668a9c2c-e4e5-4826-abbb-f3f6e6bb74cd",
                        "startTime": 1736790283,
                        "endTime": 1736790296,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "77049b8a-d74b-4430-89a2-5c9646068d60",
                        "startTime": 1736816864,
                        "endTime": 1736816866,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "868acd84-bbb7-441b-9bcf-b0167c6eba9f",
                        "startTime": 1736816870,
                        "endTime": 1736816872,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "9c475402-ba01-482d-944a-83a3995fb1a8",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "bd089289-bbef-4a33-b263-1b89b720c2fc",
                        "startTime": 1736278295,
                        "endTime": 1736278355,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Called the patient and left a vm.",
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "c99b6aba-8eb1-486c-a634-77339e7dea3b",
                        "startTime": 1736796615,
                        "endTime": 1736796632,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ESCALATION",
                        "comment": null,
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    },
                    {
                        "callId": "d61296d7-ee91-49d8-9958-0ffe70a3d5a7",
                        "startTime": 1736350571,
                        "endTime": 1736350631,
                        "prepTime": 0,
                        "type": "NETWORK",
                        "status": "DID_NOT_ANSWER",
                        "reason": "UNKNOWN",
                        "comment": "Called the patient and left a vm",
                        "patientId": "2ef895b1-e0c9-4067-a4c1-edebc586bfcc",
                        "callerEmployeeId": "7b46e5b6-dddf-4068-9b50-155aed32ad6b",
                        "healthcareFacilityId": "b6e3eed2-cf55-4aa2-b511-076bd03dd86b"
                    }
                ],
                "user": {
                    "userId": "d4ae8283-c454-4e94-9c30-b1fa471d50ed",
                    "mobile": "19036543915",
                    "fullName": "Wilson Vannice"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 420,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736188604,
                    "duration": 60,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736350571,
                    "duration": 120,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736441285,
                    "duration": 60,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736535967,
                    "duration": 60,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736790302,
                    "duration": 60,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736796647,
                    "duration": 60,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1735671600,
                        "day": 12,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 13,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736794800,
                        "day": 14,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 7
            }
        },
        {
            "patientProgressReportId": "087ab1bf-1959-48bb-9f6d-3f990bb98197",
            "patientId": "9fabed29-1c0a-4b08-b3ff-5dcd78d762ab",
            "reportingMonth": 0,
            "reportingYear": 2025,
            "startDate": 1,
            "endDate": 31,
            "totalReadings": 12,
            "lastReadingDate": 1736839478,
            "pAlert": 1,
            "readingPlusAlert": 13,
            "totalCallDurationSec": 240,
            "auxiliaryDurationSec": 985,
            "lastEncounterDate": 1736446548,
            "sortCriteriaReading": 3,
            "sortCriteriaCalls": 0.42,
            "sortCriteriaCombined": 0,
            "listOfReadingDates": "1 2 3 4 5 6 7 8 9 10 11 14",
            "listOfPAlertDates": "12",
            "expectedBill": 20,
            "appliedCPTCodes": "[\"99457\"]",
            "dayStatus": "[1,1,1,1,1,1,1,1,1,1,1,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
            "isIncentiveProgram": false,
            "isDropOff": false,
            "patient": {
                "patientId": "9fabed29-1c0a-4b08-b3ff-5dcd78d762ab",
                "patientType": "CHRONIC",
                "patientCode": 1136,
                "pin": null,
                "isPinSet": false,
                "insuranceStatus": "INSURED",
                "copayAmount": null,
                "fatherName": null,
                "husbandName": null,
                "passportNo": null,
                "bloodGroup": null,
                "caregiverFirstName": null,
                "caregiverLastName": null,
                "caregiverRelation": null,
                "caregiverMobile": null,
                "preferredLanguage": "English",
                "followUpStatus": null,
                "height": null,
                "age": null,
                "hospitalNo": "RPM-01136",
                "externalHn": null,
                "isDemoPatient": false,
                "termsAgreed": false,
                "flag": false,
                "doctorNotes": "",
                "admissionStatus": "ADMITTED",
                "activationStatus": "ACTIVE",
                "ccmActivationStatus": "NEW",
                "program": "RPM",
                "isReferredMailSent": false,
                "isMedicaid": false,
                "medicareId": null,
                "memberId": "BSW117447600",
                "groupNo": "NONE",
                "secondaryMemberId": null,
                "secondaryGroupNo": null,
                "userId": "5257c51d-4d51-46e5-94d3-fd50f1c60ebf",
                "insurancePlanId": "387979ff-bf16-414e-909f-fa2679417aea",
                "isSecondaryInsurance": false,
                "secondaryInsurancePlanId": null,
                "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                "librePatientId": null,
                "librePracticeId": null,
                "homeHealthAgencyMemberId": null,
                "createdByEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                "dateCreated": 1727716149,
                "averageReadingTime": null,
                "dateUpdated": 1727716149,
                "referralDate": 1727672400,
                "orderableValues": [
                    {
                        "acquisitionTime": 1736839626
                    }
                ],
                "rmsAdmissions": [
                    {
                        "rmsAdmissionId": "95d814c5-39ab-4d15-94e1-e255c541cc9c",
                        "admissionDate": 1727716149,
                        "dischargeDate": null,
                        "primaryDoctorId": "dcc86f24-b0dc-4539-8312-e817757296bb",
                        "patientId": "9fabed29-1c0a-4b08-b3ff-5dcd78d762ab",
                        "isPinned": false,
                        "isDeleted": false,
                        "dateCreated": 1727716149,
                        "dateUpdated": 1727716149,
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423",
                        "rmsOrders": [
                            {
                                "orderable": {
                                    "orderableId": "1",
                                    "name": "Blood Pressure",
                                    "abbr": "BP",
                                    "icon": "https://web-app.chirpm.com/rms/v1/files?url=uploads/000-000/Blood Pressure-b597b3.svg",
                                    "times": "10:00, 18:00",
                                    "instructions": "Rest Position",
                                    "orderableType": "HOMECARE",
                                    "isDeleted": false,
                                    "dateCreated": 1642577305,
                                    "dateUpdated": 1701439165
                                },
                                "RMSOrderToResultable": [
                                    {
                                        "resultable": {
                                            "name": "Systolic",
                                            "resultableId": "1"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Pulse",
                                            "resultableId": "12"
                                        }
                                    },
                                    {
                                        "resultable": {
                                            "name": "Diastolic",
                                            "resultableId": "2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "call": [
                    {
                        "callId": "a79c5c44-9bc4-4ec6-a568-8c28972449a4",
                        "startTime": 1736446260,
                        "endTime": 1736446500,
                        "prepTime": 0,
                        "type": "CHARMS",
                        "status": "PICKED",
                        "reason": "ADHOC_FOLLOWUP",
                        "comment": "Patient was reached out to for monthly communication. Patient has been compliant and reports to not have any issues with the device. ",
                        "patientId": "9fabed29-1c0a-4b08-b3ff-5dcd78d762ab",
                        "callerEmployeeId": "a08edc82-3524-4aff-b19e-c6e4b408c14a",
                        "healthcareFacilityId": "e1425706-5be2-483b-aae5-562f21180423"
                    }
                ],
                "user": {
                    "userId": "5257c51d-4d51-46e5-94d3-fd50f1c60ebf",
                    "mobile": "12147277575",
                    "fullName": "Mark Masoudpour"
                }
            },
            "daysToInactive": 14,
            "totalDuration": 240,
            "dataList": [
                {
                    "date": 0,
                    "duration": 0,
                    "day": 1,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 2,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 3,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 4,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 5,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 6,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 7,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 8,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 1736446260,
                    "duration": 240,
                    "day": 9,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 10,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 11,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 12,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 13,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 14,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 15,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 16,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 17,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 18,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 19,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 20,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 21,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 22,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 23,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 24,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 25,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 26,
                    "isSunday": true,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 27,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 28,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 29,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 30,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                },
                {
                    "date": 0,
                    "duration": 0,
                    "day": 31,
                    "isSunday": false,
                    "startOfDay": 1738349999999
                }
            ],
            "monthlyReadings": {
                "heading": "Compliance: 1, 2025 ",
                "readingModels": [
                    {
                        "date": 1735671600,
                        "day": 1,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735758000,
                        "day": 2,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735844400,
                        "day": 3,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1735930800,
                        "day": 4,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736017200,
                        "day": 5,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736103600,
                        "day": 6,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736190000,
                        "day": 7,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736276400,
                        "day": 8,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736362800,
                        "day": 9,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736449200,
                        "day": 10,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736535600,
                        "day": 11,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 12,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736708400,
                        "day": 13,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736622000,
                        "day": 14,
                        "dailyReadingStatus": 1,
                        "status": "Compliant"
                    },
                    {
                        "date": 1736881200,
                        "day": 15,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1736967600,
                        "day": 16,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737054000,
                        "day": 17,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737140400,
                        "day": 18,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737226800,
                        "day": 19,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737313200,
                        "day": 20,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737399600,
                        "day": 21,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737486000,
                        "day": 22,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737572400,
                        "day": 23,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737658800,
                        "day": 24,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737745200,
                        "day": 25,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737831600,
                        "day": 26,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1737918000,
                        "day": 27,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738004400,
                        "day": 28,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738090800,
                        "day": 29,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738177200,
                        "day": 30,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    },
                    {
                        "date": 1738263600,
                        "day": 31,
                        "dailyReadingStatus": 0,
                        "status": "Not Compliant"
                    }
                ],
                "totalReadings": 13
            }
        }
    ]
}
