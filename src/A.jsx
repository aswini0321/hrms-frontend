
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
    probation:'',
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
    deputationLocation: '',
    remarks:'',
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
const designations = [
  'Panchayat Secretary (Grade-I to V)',
  'Panchayat Secretary Grade VI (Digital Assistant)',
  'Welfare and Education Assistant',
  'Village Agriculture Assistant',
  'Horticulture Assistant',
  'Sericulture Assistant',
  'Veterinary Assistant',
  'Fisheries Assistant',
  'Engineering Assistant (Grade-II)',
  'Village Revenue Officer',
  'Village Surveyor Assistant (Grade-III)',
  'Mahila Police & Ward Women & Weaker Sections Protection Secretary (Female)',
  'ANM / Ward Health Secretary',
  'Energy Assistant (JL Grade III)'
];  
const secretariats = [
  'A.G.KODERU',
'A.SENIVARAM',
'ADAKULA',
'ADDATEEGALA1',
'ADDATEEGALA2',
'ADUGULAPUT',
'AKURU',
'AMINABADA',
'ANANTHAGIRI',
'ANNAVARAM',
'ARADAKOTA',
'ARAKU',
'ARAMA',
'AYINADA',
'B.VELAMAKOTA',
'BABUSALA',
'BADADANAMPALLI',
'BAKULURU',
'BAKURU',
'BALAPAM',
'BANDAPALLI',
'BANGARAMPETA1',
'BANGARAMPETA2',
'BANGARUMETTA',
'BARADA',
'BASIKI',
'BENNAVARAM',
'BHEEMAVARAM',
'BHEEMPOLU',
'BHEERAM',
'BODDAGANDI',
'BODULURU',
'BOITHILI',
'BOLAGUNDA',
'BONDAM',
'BONDAPALLI',
'BOORJA',
'BORRA',
'BOSUVALASA',
'BUDARALLA',
'BUNGAPUT',
'BUSIPUTTU',
'CH.R.PETA',
'CHADALAVADA',
'CHAMAGADDA',
'CHATTI',
'CHAVIDIKOTA',
'CHAVITIDIBBALU',
'CHEEDIPALEM',
'CHERUKUMPALEM',
'CHIDUMURU',
'CHIKILINTA',
'CHILAKALAGEDDA',
'CHINALABABU',
'CHINARUKURU',
'CHINNAMATTAPALLI',
'CHINTALAPLUDI',
'CHINTALAVEEDHI',
'CHINTAPLLI-1',
'CHINTAPLLI-2',
'CHINTAPLLI-3',
'CHINTOOR1',
'CHINTOOR2',
'CHITTEMPADU',
'CHODAVARAM',
'CHOMPI',
'CHOWDUPALLI-1',
'CHOWDUPALLI-2',
'CHUCHIREVULAGUDEM',
'D.BHEEMAVARAM',
'D.N.PALEM',
'D.RAMAVARAM',
'D.V.KOTA',
'DALIPADU',
'DAMANAPALLI',
'DARAGADDDA',
'DARAKONDA-1',
'DARAKONDA-2',
'DARELA',
'DEMUDUVALASA',
'DEVAPURAM',
'DEVARAMADUGULA',
'DEVARAPALLI',
'DEVIPATNAM1',
'DEVIPATNAM2',
'DHANYAMPALEM',
'DOKULURU',
'DOWNURU',
'DUCHARTHI',
'DUPPULAVASA',
'DURGAM',
'DUSARIPAMU',
'EDUGURALLAPALLI',
'FOULKSPETA',
'G.K.VEEDHI-1',
'G.K.VEEDHI-2',
'G.M.VALASA',
'G.MADUGULA-1',
'G.MADUGULA-2',
'GADIKINCHUMANDA',
'GADUTHURU',
'GADUVAKURTHI',
'GALIKONDA',
'GAMPARAI',
'GANGAVARAM',
'GANGAVARAM',
'GANNELA',
'GANNERUPUTTU',
'GASABA',
'GATTUM',
'GAVARAYYAPETA',
'GEDELABANDA',
'GEMMELI',
'GINNELAKOTA',
'GOMANGI',
'GOMMUKOTHAGUDEM',
'GONDELI',
'GONDIPAKALU',
'GONDOLU',
'GONTUVANIPALEM',
'GOWRIDEVIETA',
'GUDA',
'GUDURU',
'GUMMA',
'GUMMAKOTA',
'GUMMIREVULU',
'GUNDALA',
'GUNTAGANNELA',
'GUNTASEEMA',
'GURTHEDU',
'GUTTULAPUTTU',
'HUKUMPETA',
'I.POLAVARAM',
'INDUKURU',
'INDUKURUPETA',
'INJARI',
'IRADAPALLE',
'IRAGAI',
'JADDANGI',
'JAGGAMPALEM',
'JAGGAVARAM',
'JAMIGUDA',
'JARJULA',
'JARRAKONDA',
'JEEDIGUPPA',
'JEENABADU',
'JERILA',
'JOLAPUT',
'K.KODAPALLI',
'K.YERRAGONDA',
'KANDRUM',
'KANIVADA',
'KANNAIGUDEM',
'KANTARAM',
'KARAKAGUDEM',
'KARIMUKHIPUTTU',
'KASIPATNAM',
'KILAGADA',
'KIMMURU',
'KIMUDUPALLI',
'KINACHAIPUTTU',
'KINCHUMANDA',
'KINDRA',
'KITHALANGI',
'KITUMULA',
'KIVARLA',
'KOMMANGI',
'KOMMIKA',
'KONALOVA',
'KONDAGOKIRI',
'KONDAMODALU',
'KONDIBA',
'KONDRAJUPETA',
'KONTNAPALLI',
'KORAPALLI',
'KORRA',
'KORRAI',
'KOTA',
'KOTHABALLUGUDA',
'KOTHADA',
'KOTHAPALEM-1',
'KOTHAPALEM-2',
'KOTTURU',
'KOYYURU',
'KUDUMSARI',
'KUMADA',
'KUMMURU',
'KUNAVARAM',
'KUNTHARLA',
'KURIDI',
'KUTRAWADA',
'KUTURU',
'LABBARTHI',
'LAGISAPALLE',
'LAKKAVARAPUPETA',
'LAKKONDA',
'LAKSHMIPURAM',
'LAMMASINGI',
'LAXMIPURAM',
'LINGETI',
'LODODDI',
'LOTHERU',
'LOTHUGEDDA',
'LUNGAPARTHI',
'M.BHEEMAVARAM',
'M.MAKAVARAM',
'MADAGADA-1',
'MADAGADA-2',
'MADALA',
'MADICHERLA',
'MAKAVARAM',
'MAMPA',
'MAREDUMILLI',
'MARRIPALEM',
'MARRIWADA',
'MATTAM',
'MATYAPURAM',
'METTUJORU',
'MINUMULURU',
'MOHANAPURAM',
'MOLLERU',
'MONDIGEDDA',
'MOTHUGUDEM',
'MUKUNURU',
'MULAKANAPALLI',
'MULIYAPUTTU',
'MUSURUMILLI',
'NADIMPALEM',
'NANDIGAMA',
'NARASIMHARAJAPURAM',
'NELLIPAKA',
'NELLIPUDI',
'NURMATHI',
'OLDA',
'P.YERRAGONDA',
'PADAMPURAM-1',
'PADAMPURAM-2',
'PADERU-1',
'PADERU-2',
'PADERU-3',
'PALAMAMIDI',
'PANASALAPLALEM',
'PARREDA',
'PATHAKOTA',
'PATHAKOTA',
'PATTAM',
'PEDABARADA',
'PEDABIDDA',
'PEDAGADDADA',
'PEDAGUDA',
'PEDAKODAPALLI',
'PEDAKOTA',
'PEDALABUDU-1',
'PEDALABUDU-2',
'PEDALABUDU-3',
'PEDALOCHALI',
'PEDALUVVASINGI',
'PEDAVALASA',
'PEDDAMATTAPALLI',
'PEDDARUKURU',
'PEGA',
'PICHUKALAPADU',
'PIDATHAMAMIDI',
'PINAKOTA',
'POCHAVARAM',
'POTHANGI',
'PUDIPALLI',
'PYNAMPADU',
'RAJAVOMMANGI1',
'RAJAVOMMANGI2',
'RAJUPETA',
'RAMAVARAM',
'RAMPA',
'RAMPACHODAVARAM1',
'RAMPACHODAVARAM2',
'RAMPACHODAVARAM3',
'RANGASEELA',
'RAPA',
'RAVANAPALLI',
'RAYAPALLI',
'RAYAVANAPETA',
'REGULAPADU',
'REJENDRAPALEM',
'REKHAPALLI',
'REVALLU',
'RINTHADA-1',
'RINTHADA-2',
'ROMPALLI',
'RUDAKOTA',
'SAGARA',
'SALUGU',
'SANKADA',
'SANTHARI',
'SARABHANNAPALEM1',
'SARABHANNAPALEM2',
'SARABHAVARAM',
'SARABHAVARAM',
'SEEKARI',
'SILERU',
'SINGARBHA',
'SITAGUNTA',
'SOBHAKOTA',
'SOLABHAM-1',
'SOLABHAM-2',
'SRIGAM',
'SUJANAKOTA',
'SUKURU',
'SUNKARAMETTA',
'SUNNAMPADU',
'TADEPALLI',
'TAJANGI-1',
'TAJANGI-2',
'TAMARAPALLI',
'TEEGALAVALASA',
'THADIGIRI',
'THADIPUTTU',
'THAMMANGULA',
'THANTIKONDA',
'THIMMAPURAM',
'THUMPADA',
'THUNGAMADUGULA',
'TOKURU',
'TRIPURAPENTAVEDU',
'TUMMALA',
'U.CHEEDIPALEM',
'V.R.PALEM',
'VACHULA',
'VALASI',
'VANJARI-1',
'VANJARI-2',
'VANTHADAPALLE',
'VANTHALA',
'VANTHALAMAMIDI',
'VANUGUMMA',
'VATHANGI',
'VEERAVARAM',
'VEMULAKONDA',
'VENKATAYAPALEM',
'VETAMAMIDI',
'VISSAPURAM',
'VONCHANGI',
'VOOTLA',
'WADDIGUDEM',
'Y.RAMAVARAM',
'YARLAGADDA',
'YEGUVASOBHA',
'YELLAVARAM',
'YENUGURAI',
'YERRABOMMALU',
'YERRAMREDDIPALEM',
'YETAPAKA',
'ZADERU'
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
      const response = await axios.post('https://hrms-backend-36vx.onrender.com/category-a', formData);
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
          {/* <div className="form-group">
            <label>Designation</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
          </div> */}
           <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <select
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            >
              <option value="">Select designation</option>
              {designations.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

           <div className="form-group">
            <label>Probation confirmation (Yes/No)</label>
            <select name="probation" value={formData.probation} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* PS/VRO Grade */}
          <div className="form-group">
            <label>select Grade (I/II/III/IV/V/VI)</label>
            <select name="psVroGrade" value={formData.psVroGrade} onChange={handleChange} required>
              <option value="">Select Grade</option>
              {['I','II','III','IV','V','VI','NA'].map(g => <option key={g} value={g}>{g}</option>)}
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
              <option value="REGULAR">REGULAR-WORKING SAME SECRETARIAT</option>
            </select>
          </div>

          <div className="form-group">
            <label>If DEPUTATION/OD → Location</label>
            <input type="text" name="deputationLocation" value={formData.deputationLocation} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Remarks</label>
            <input type="text" name="remarks" value={formData.remarks} onChange={handleChange} required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AForm;





