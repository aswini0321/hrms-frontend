
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './A.css';

const AForm = () => {
  const [formData, setFormData] = useState({
    mandalName: '',
    secretariatNameCode: '',
    employeeName: '',
    employeeId: '',
    designation: '',
    psVroGrade: '',
    dob: '',
    doj: '',
    hrmsId: '',
    cfmsId: '',
    emailId: '',
    mobileNumber: '',
    aadhaarNumber: '',
    rationalizationPosition: '',
    lastUpdatedDate: '',
    transferredRecently: '',
    salaryDrawingPresent: '',
    salaryDrawingOffice: '',
    employmentType: '',
    deputationLocation: ''
  });
  
  const mandals = [
  'ADDATEEGALA-R',
  'ANANTHAGIRI-R',
  'ARAKU VALLEY-R',
  'CHINTAPALLI-R',
  'CHINTOOR-R',
  'DEVIPATNAM-R',
  'DUMBRIGUDA-R',
  'G.K VEEDHI-R',
  'G.MADUGULA-R',
  'GANGAVARAM AGENCY-R',
  'HUKUMPETA-R',
  'KOYYURU-R',
  'KUNAVARAM-R',
  'MAREDUMILLI-R',
  'MUNCHINGAPUTTU-R',
  'NELLIPAKA-R',
  'PADERU-R',
  'PEDABAYALU-R',
  'RAJAVOMMANGI-R',
  'RAMPACHODAVARAM-R',
  'VARARAMACHANDRAPURAM-R',
  'Y.RAMAVARAM-R'
];
const secretariats = [
  'A.G.KODERU (10491259)', 'A.SENIVARAM (10390513)', 'ADAKULA (10390472)', 
  'ADDATEEGALA1 (10490852)', 'ADDATEEGALA2 (10490868)', 'ADUGULAPUT (10390706)',
  'AKURU (10490675)', 'AMINABADA (10490836)', 'ANANTHAGIRI (10390625)', 
  'ANNAVARAM (10390514)', 'ARADAKOTA (10390707)', 'ARAKU (10390664)', 
  'ARAMA (10390665)', 'AYINADA (10390553)', 'B.VELAMAKOTA (10490676)',
  'BABUSALA (10390722)', 'BADADANAMPALLI (10490837)', 'BAKULURU (10390473)', 
  'BAKURU (10390680)', 'BALAPAM (10390515)', 'BANDAPALLI (10490677)',
  'BANGARAMPETA1 (10390474)', 'BANGARAMPETA2 (10390475)', 'BANGARUMETTA (10390723)',
  'BARADA (10390724)', 'BASIKI (10390646)', 'BENNAVARAM (10390516)',
  'BHEEMAVARAM (10390681)', 'BHEEMPOLU (10390626)', 'BHEERAM (10390535)',
  'BODDAGANDI (10490869)', 'BODULURU (10490886)', 'BOITHILI (10390536)',
  'BOLAGUNDA (10490678)', 'BONDAM (10390647)', 'BONDAPALLI (10390708)',
  'BOORJA (10390682)', 'BORRA (10390627)', 'BOSUVALASA (10390666)',
  'BUDARALLA (10390476)', 'BUNGAPUT (10390725)', 'BUSIPUTTU (10390726)',
  'CH.R.PETA (10490665)', 'CHADALAVADA (10491260)', 'CHAMAGADDA (10490870)',
  'CHATTI (10491261)', 'CHAVIDIKOTA (10490887)', 'CHAVITIDIBBALU (10490871)',
  'CHEEDIPALEM (10390477)', 'CHERUKUMPALEM (10490838)', 'CHIDUMURU (10491262)',
  'CHIKILINTA (10490839)', 'CHILAKALAGEDDA (10390628)', 'CHINALABABU (10390648)',
  'CHINARUKURU (10491205)', 'CHINNAMATTAPALLI (10491232)', 'CHINTALAPLUDI (10490872)',
  'CHINTALAVEEDHI (10390554)', 'CHINTAPLLI-1 (10390517)', 'CHINTAPLLI-2 (10390518)',
  'CHINTAPLLI-3 (10390519)', 'CHINTOOR1 (10491263)', 'CHINTOOR2 (10491264)',
  'CHITTEMPADU (10390478)', 'CHODAVARAM (10491216)', 'CHOMPI (10390649)',
  'CHOWDUPALLI-1 (10390520)', 'CHOWDUPALLI-2 (10390521)', 'CHUCHIREVULAGUDEM (10491206)',
  'D.BHEEMAVARAM (10490853)', 'D.N.PALEM (10490666)', 'D.RAMAVARAM (10490854)',
  'D.V.KOTA (10490888)', 'DALIPADU (10490873)', 'DAMANAPALLI (10390495)',
  'DARAGADDDA (10490874)', 'DARAKONDA-1 (10390496)', 'DARAKONDA-2 (10390497)',
  'DARELA (10390727)', 'DEMUDUVALASA (10390667)', 'DEVAPURAM (10390555)',
  'DEVARAMADUGULA (10490875)', 'DEVARAPALLI (10390498)', 'DEVIPATNAM1 (10490667)',
  'DEVIPATNAM2 (10490668)', 'DHANYAMPALEM (10490855)', 'DOKULURU (10390556)',
  'DOWNURU (10390479)', 'DUCHARTHI (10490856)', 'DUPPULAVASA (10390499)',
  'DURGAM (10390683)', 'DUSARIPAMU (10490840)', 'EDUGURALLAPALLI (10491265)',
  'FOULKSPETA (10490679)', 'G.K.VEEDHI-1 (10390500)', 'G.K.VEEDHI-2 (10390501)',
  'G.M.VALASA (10490889)', 'G.MADUGULA-1 (10390537)', 'G.MADUGULA-2 (10390538)',
  'GADIKINCHUMANDA (10390684)', 'GADUTHURU (10390539)', 'GADUVAKURTHI (10490841)',
  'GALIKONDA (10390502)', 'GAMPARAI (10390709)', 'GANGAVARAM (10490697)',
  'GANGAVARAM (10491217)', 'GANNELA (10390650)', 'GANNERUPUTTU (10390685)',
  'GASABA (10390668)', 'GATTUM (10390686)', 'GAVARAYYAPETA (10490857)',
  'GEDELABANDA (10390669)', 'GEMMELI (10390540)', 'GINNELAKOTA (10390710)',
  'GOMANGI (10390711)', 'GOMMUKOTHAGUDEM (10491218)', 'GONDELI (10390557)',
  'GONDIPAKALU (10390522)', 'GONDOLU (10490858)', 'GONTUVANIPALEM (10490859)',
  'GOWRIDEVIETA (10491219)', 'GUDA (10390687)', 'GUDURU (10491266)',
  'GUMMA (10390629)', 'GUMMAKOTA (10390630)', 'GUMMIREVULU (10390503)',
  'GUNDALA (10491220)', 'GUNTAGANNELA (10390670)', 'GUNTASEEMA (10390671)',
  'GURTHEDU (10490876)', 'GUTTULAPUTTU (10390558)', 'HUKUMPETA-R', 'KOYYURU-R',
  'KUNAVARAM-R', 'MAREDUMILLI-R', 'MUNCHINGAPUTTU-R', 'NELLIPAKA-R', 'PADERU-R',
  'PEDABAYALU-R', 'RAJAVOMMANGI-R', 'RAMPACHODAVARAM-R', 'VARARAMACHANDRAPURAM-R',
  'Y.RAMAVARAM-R'
];
     const navigate = useNavigate();
    const handleBack = () => {
      navigate("/");
    };
      const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
      const response = await axios.post('http://localhost:4000/category-a', formData);
      alert(response.data.message);
    } catch (err) {
       console.error(err);
      alert('Error submitting the form');
     }
    };

  return (
    <div className="form">
      <div className="top-left">
        <button className="back-home-btn" onClick={handleBack}>⬅</button>
      </div>
      <h1>Employee HR Details Form</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>

          {/* Mandal */}
          <div className="form-group">
            <label htmlFor="mandalName">Mandal Name</label>
            <select
              id="mandalName"
              name="mandalName"
              value={formData.mandalName}
              onChange={handleChange}
              required
            >
              <option value="">Select Mandal</option>
              {mandals.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          {/* Secretariat */}
          <div className="form-group">
            <label htmlFor="secretariatNameCode">Secretariat Name & Code</label>
            <select
              id="secretariatNameCode"
              name="secretariatNameCode"
              value={formData.secretariatNameCode}
              onChange={handleChange}
              required
            >
              <option value="">Select Secretariat</option>
              {secretariats.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Employee Name */}
          <div className="form-group">
            <label>Employee Name</label>
            <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} required />
          </div>

          <div className="form-group">
             <label>Employee ID</label>
         <input type="text" name="employeeId" value={formData.employeeId || ''} onChange={handleChange} required />
        </div>

          {/* Designation */}
          <div className="form-group">
            <label>Designation</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
          </div>

          {/* PS/VRO Grade */}
          <div className="form-group">
            <label>PS/VRO Grade (I/II/III/IV/V/VI)</label>
            <select name="psVroGrade" value={formData.psVroGrade} onChange={handleChange} required>
              <option value="">Select Grade</option>
              {['I','II','III','IV','V','VI'].map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          {/* Dates */}
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Date of Joining</label>
            <input type="date" name="doj" value={formData.doj} onChange={handleChange} required />
          </div>

          {/* IDs */}
          <div className="form-group">
            <label>HRMS ID</label>
            <input type="text" name="hrmsId" value={formData.hrmsId} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>CFMS ID</label>
            <input type="text" name="cfmsId" value={formData.cfmsId} onChange={handleChange} required />
          </div>

          {/* Contact */}
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Aadhaar Number</label>
            <input type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} required />
          </div>

          {/* Rationalization Position */}
          <div className="form-group">
            <label>Rationalization Position (Yes/No)</label>
            <select name="rationalizationPosition" value={formData.rationalizationPosition} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Last Updated */}
          <div className="form-group">
            <label>Last Updated Date (HRMS Portal)</label>
            <input type="date" name="lastUpdatedDate" value={formData.lastUpdatedDate} onChange={handleChange} required />
          </div>

          {/* Transferred Recently */}
          <div className="form-group">
            <label>Transferred Recently (Yes/No)</label>
            <select name="transferredRecently" value={formData.transferredRecently} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Salary Drawing */}
          <div className="form-group">
            <label>Salary Drawing in Present Secretariat (Yes/No)</label>
            <select name="salaryDrawingPresent" value={formData.salaryDrawingPresent} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>If No → Mention Salary Drawing Office</label>
            <input type="text" name="salaryDrawingOffice" value={formData.salaryDrawingOffice} onChange={handleChange} />
          </div>

          {/* Employment Type */}
          <div className="form-group">
            <label>Employment Type (DEPUTATION/OD/REGULAR)</label>
            <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="DEPUTATION">DEPUTATION</option>
              <option value="OD">OD</option>
              <option value="REGULAR">REGULAR</option>
            </select>
          </div>

          <div className="form-group">
            <label>If DEPUTATION/OD → Location</label>
            <input type="text" name="deputationLocation" value={formData.deputationLocation} onChange={handleChange} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AForm;

