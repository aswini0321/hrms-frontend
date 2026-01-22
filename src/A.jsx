import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./A.css";

const AForm = () => {

  const [formData, setFormData] = useState({

    nameOfTheInspectionOfficer: "",
    designation: "",
    contactNumber: "",
    inspectionMandalName: "",
    nameOfTheSecretariat: "",
    dateOfInspection: "",

    howManyEmployeesAreWorkingInSecretariat: "",
    designationWiseAttendanceAsOnDateOfInspection: "",

    anm: "",
    mahilaPoliceWomenAndChildWelfareAssistant: "",
    panchayatSecretary: "",
    welfareAndEducationalAssistant: "",
    agricultureHorticultureMPEOs: "",
    engineeringAssistant: "",
    panchayatSecretaryGradeVIDigitalAssistant: "",
    vro: "",
    energyAssistant: "",
    veterinaryFisheriesAssistant: "",
    surveyAssistant: "",
    panchayatSecretaryGradeIV: "",

    incaseOfFieldVisitOfEmployeesAsShownInMomentRegister: "",

    totalNoOfServicesRegistered: "",
    servicesOpenWithinSLA: "",
    servicesOpenBeyondSLA: "",
    servicesClosedWithinSLA: "",
    servicesClosedBeyondSLA: "",
    pendingPaymentsRemittance: "",

    peopleWorkingFromHome: "",
    peopleInterestedToWFH_IT_ITES: "",
    villageProfileReport: "",
    msmeSurvey: "",
    missingCitizensInAllCategories: "",
    verificationStatusOfChildren0To6YearsWithoutAadhar: "",
    aadharCampsForThisMonth: "",
    reportOnDeathMarkedCitizensAudit: "",
    missingEmployeesInHouseholds: "",
    nonAPResidentSurvey: "",
    primaryAgricultureCooperativeCreditSocietiesPACS: "",
    capturingHouseImagesAndGeoCoordinates: "",
    npciActionTakenPending: "",
    anyOtherSurvey: "",

    howManyDesktopsAreAvailableInTheSecretariat: "",
    howManyDesktopsAreInWorkingCondition: "",
    inventoryManagementTicketNumberForNotWorkingDesktops: "",

    doTheSecretariatHaveAPrinter: "",
    isTheSecretariatPrinterInWorkingCondition: "",
    inventoryManagementTicketNumberForPrinter: "",

    howManyHighSecurityStationeryCertificatesAvailable: "",

    doTheSecretariatHaveAnUPS: "",
    isUPSInWorkingCondition: "",
    inventoryManagementTicketNumberForUPS: "",

    whichDevicesRequiredRepairs: "",
    whichDevicesRequiredReplacement: "",

    doesTheSecretariatHaveWiredInternetConnection: "",
    nameOfTheServiceProvider: "",
    bandwidthOfInternetSpeed: "",

    howManyTablesAreAvailable: "",
    howManyChairsAreAvailable: "",

    doTheSecretariatHaveWashrooms: "",
    areWashroomsInWorkingCondition: "",

    remarks: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const navigate = useNavigate();
  const handleBack = () => {
      navigate("/");
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://hrms-backend-36vx.onrender.com/category-a", formData);
      alert(res.data.message);
       navigate("/");
    } catch (err) {
      console.error(err);
      alert("Submission Failed");
    }
  };

  return (
    <div className="form">
      <div className="top-left">
                <button className="back-home-btn" onClick={handleBack}>⬅</button>
      </div>
      <h1>GVWV & VSWS INSPECTION REPORT</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>

          {/* Header */}
          <div className="form-group"><label>Name of The Inspection Officer</label><input name="nameOfTheInspectionOfficer" onChange={handleChange} /></div>
          <div className="form-group"><label>Designation</label><input name="designation" onChange={handleChange} /></div>
          <div className="form-group"><label>Contact Number</label><input name="contactNumber" onChange={handleChange} /></div>
          <div className="form-group"><label>Inspection Mandal Name</label><input name="inspectionMandalName" onChange={handleChange} /></div>
          <div className="form-group"><label>Name of the Secretariat</label><input name="nameOfTheSecretariat" onChange={handleChange} /></div>
          <div className="form-group"><label>Date of Inspection</label><input type="date" name="dateOfInspection" onChange={handleChange} /></div>

          {/* Attendance */}
          
          <h3 className="section-heading">Attendance Report</h3>
          <div className="form-group"><label>How many employees are Working in Secretariat</label><input name="howManyEmployeesAreWorkingInSecretariat" onChange={handleChange} /></div>
          
           <h3 className="section-heading">
           Designation Wise Attendance As on Date of Inspection (YES/NO)
           </h3>
          <div className="form-group"><label>ANM</label><input name="anm" onChange={handleChange} /></div>
          <div className="form-group"><label>Mahila Police & Women and child welfare Assistant</label><input name="mahilaPoliceWomenAndChildWelfareAssistant" onChange={handleChange} /></div>
          <div className="form-group"><label>Panchayat Secretary</label><input name="panchayatSecretary" onChange={handleChange} /></div>
          <div className="form-group"><label>Welfare & Educational Assistant</label><input name="welfareAndEducationalAssistant" onChange={handleChange} /></div>
          <div className="form-group"><label>Agriculture / Horticulture MPEO's</label><input name="agricultureHorticultureMPEOs" onChange={handleChange} /></div>
          <div className="form-group"><label>Engineering Assistant</label><input name="engineeringAssistant" onChange={handleChange} /></div>
          <div className="form-group"><label>Panchayat Secretary Grade VI (Digital Assistant)</label><input name="panchayatSecretaryGradeVIDigitalAssistant" onChange={handleChange} /></div>
          <div className="form-group"><label>VRO</label><input name="vro" onChange={handleChange} /></div>
          <div className="form-group"><label>Energy Assistant</label><input name="energyAssistant" onChange={handleChange} /></div>
          <div className="form-group"><label>Veterinary/Fisheries Assistant</label><input name="veterinaryFisheriesAssistant" onChange={handleChange} /></div>
          <div className="form-group"><label>Survey Assistant</label><input name="surveyAssistant" onChange={handleChange} /></div>
          <div className="form-group"><label>Panchayat Secretary (Grade IV)</label><input name="panchayatSecretaryGradeIV" onChange={handleChange} /></div>

          <div className="form-group"><label>Incase of field visit of employees As shown in the moment register</label><input name="incaseOfFieldVisitOfEmployeesAsShownInMomentRegister" onChange={handleChange} /></div>

          {/* Services Status */}
          
          <h3 className="section-heading">Services Status</h3>
          <div className="form-group"><label>Total No . Of Services Registered (1.04.2024 to As on now)</label><input name="totalNoOfServicesRegistered" onChange={handleChange} /></div>
          <div className="form-group"><label>Service which are open within SLA</label><input name="servicesOpenWithinSLA" onChange={handleChange} /></div>
          <div className="form-group"><label>Service which are open beyond SLA</label><input name="servicesOpenBeyondSLA" onChange={handleChange} /></div>
          <div className="form-group"><label>Service which are closed within SLA</label><input name="servicesClosedWithinSLA" onChange={handleChange} /></div>
          <div className="form-group"><label>Service which are closed beyond SLA</label><input name="servicesClosedBeyondSLA" onChange={handleChange} /></div>
          <div className="form-group"><label>Pending payments remittance</label><input name="pendingPaymentsRemittance" onChange={handleChange} /></div>

          {/* Surveys */}
          <h3 className="section-heading">Status Of Surveys</h3>
          <div className="form-group"><label>People Working From Home</label><input name="peopleWorkingFromHome" onChange={handleChange} /></div>
          <div className="form-group"><label>People Interested To WFH IT/ITES</label><input name="peopleInterestedToWFH_IT_ITES" onChange={handleChange} /></div>
          <div className="form-group"><label>Village Profile Report</label><input name="villageProfileReport" onChange={handleChange} /></div>
          <div className="form-group"><label>MSME Survey</label><input name="msmeSurvey" onChange={handleChange} /></div>
          <div className="form-group"><label>Missing Citizens in All Categories</label><input name="missingCitizensInAllCategories" onChange={handleChange} /></div>
          <div className="form-group"><label>Verification status of Children 0-6 Years without Aadhar</label><input name="verificationStatusOfChildren0To6YearsWithoutAadhar" onChange={handleChange} /></div>
          <div className="form-group"><label>Aadhar Camps for this Month</label><input name="aadharCampsForThisMonth" onChange={handleChange} /></div>
          <div className="form-group"><label>Report on Death Marked Citizens Audit</label><input name="reportOnDeathMarkedCitizensAudit" onChange={handleChange} /></div>
          <div className="form-group"><label>Missing Employees in Households</label><input name="missingEmployeesInHouseholds" onChange={handleChange} /></div>
          <div className="form-group"><label>Non-AP Resident Survey</label><input name="nonAPResidentSurvey" onChange={handleChange} /></div>
          <div className="form-group"><label>Primary Agriculture Cooperative Credit Societies (PACS)</label><input name="primaryAgricultureCooperativeCreditSocietiesPACS" onChange={handleChange} /></div>
          <div className="form-group"><label>Capturing House Images & Geo-coordinates</label><input name="capturingHouseImagesAndGeoCoordinates" onChange={handleChange} /></div>
          <div className="form-group"><label>NPCI Action taken Pending</label><input name="npciActionTakenPending" onChange={handleChange} /></div>
          <div className="form-group"><label>Any other survey</label><input name="anyOtherSurvey" onChange={handleChange} /></div>

          {/* Inspection Criteria */}
          
          <h3 className="section-heading">Inspection Criteria & Response</h3>
          <div className="form-group"><label>How many Desktops are available in the Secretariat?</label><input name="howManyDesktopsAreAvailableInTheSecretariat" onChange={handleChange} /></div>
          <div className="form-group"><label>How many Desktops are in working condition?</label><input name="howManyDesktopsAreInWorkingCondition" onChange={handleChange} /></div>
          <div className="form-group"><label>Enter the Inventory Management ticket number for not working Desktops</label><input name="inventoryManagementTicketNumberForNotWorkingDesktops" onChange={handleChange} /></div>

          <div className="form-group"><label>Do the Secretariat have a printer?</label>
            <select name="doTheSecretariatHaveAPrinter" onChange={handleChange}><option value="">Select</option><option>YES</option><option>NO</option></select>
          </div>

          <div className="form-group"><label>Is the Secretariat printer in working condition?</label>
            <select name="isTheSecretariatPrinterInWorkingCondition" onChange={handleChange}><option value="">Select</option><option>YES</option><option>NO</option></select>
          </div>

          <div className="form-group"><label>Enter the Inventory Management ticket number</label><input name="inventoryManagementTicketNumberForPrinter" onChange={handleChange} /></div>

          <div className="form-group"><label>As on Date, how many High Security Stationery (Certificates) are available in the Secretariat?</label><input name="howManyHighSecurityStationeryCertificatesAvailable" onChange={handleChange} /></div>

          <div className="form-group"><label>Do the Secretariat have an UPS?</label>
            <select name="doTheSecretariatHaveAnUPS" onChange={handleChange}><option value="">Select</option><option>YES</option><option>NO</option></select>
          </div>

          <div className="form-group"><label>Is UPS in the Secretariat in working condition?</label>
            <select name="isUPSInWorkingCondition" onChange={handleChange}><option value="">Select</option><option>YES</option><option>NO</option></select>
          </div>

          <div className="form-group"><label>Enter the Inventory Management ticket number</label><input name="inventoryManagementTicketNumberForUPS" onChange={handleChange} /></div>

          <div className="form-group"><label>Which devices required repairs?</label><input name="whichDevicesRequiredRepairs" onChange={handleChange} /></div>
          <div className="form-group"><label>Which devices required replacement?</label><input name="whichDevicesRequiredReplacement" onChange={handleChange} /></div>

          <div className="form-group"><label>Does the Secretariat have wired internet connection?</label>
            <select name="doesTheSecretariatHaveWiredInternetConnection" onChange={handleChange}><option value="">Select</option><option>YES</option><option>NO</option></select>
          </div>

          <div className="form-group"><label>If Yes, Enter the name of the service provider</label><input name="nameOfTheServiceProvider" onChange={handleChange} /></div>
          <div className="form-group"><label>Band width of internet speed</label><input name="bandwidthOfInternetSpeed" onChange={handleChange} /></div>

          <div className="form-group"><label>How many Tables are available in the Secretariat?</label><input name="howManyTablesAreAvailable" onChange={handleChange} /></div>
          <div className="form-group"><label>How many Chairs are available in the Secretariat?</label><input name="howManyChairsAreAvailable" onChange={handleChange} /></div>

          <div className="form-group"><label>Do the Secretariat have the Washrooms?</label>
            <select name="doTheSecretariatHaveWashrooms" onChange={handleChange}><option value="">Select</option><option>YES</option><option>NO</option></select>
          </div>

          <div className="form-group"><label>If Yes, whether the Washrooms in the working condition?</label>
            <select name="areWashroomsInWorkingCondition" onChange={handleChange}><option value="">Select</option><option>YES</option><option>NO</option></select>
          </div>

           {/* Registers Maintained */}
<div className="form-group">
  <label>Which of the Following Registers maintained in the Secretariat</label>
  <select name="registersMaintained" onChange={handleChange}>
    <option value="">Select</option>
    <option>Attendance Register</option>
    <option>Movement Register</option>
    <option>Stock Register</option>
    <option>GSWS Services Register</option>
    <option>MeeSeva Register</option>
    <option>Certificates Issued Register</option>
    <option>Remittances of Service Charges Register</option>
    <option>Cash Box Register</option>
    <option>PGRS Grievances Register</option>
    <option>Visitor Register</option>
    <option>Awareness Register</option>
  </select>
</div>

{/* Posters Displayed */}
<div className="form-group">
  <label>Which of the following Posters displayed in the Secretariat?</label>
  <select name="postersDisplayed" onChange={handleChange}>
    <option value="">Select</option>
    <option>GSWS CSC Services Posters</option>
    <option>Aadhar Posters Including Services Charges</option>
    <option>Emergency Contact Posters</option>
  </select>
</div>

          <div className="form-group">
            <label>Remarks</label>
            <input name="remarks" onChange={handleChange} />
          </div>

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
};

export default AForm;
