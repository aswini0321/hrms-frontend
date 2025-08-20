// import React, { useState } from 'react';
// import axios from 'axios';  // Import axios
// import { useNavigate } from 'react-router-dom';  
// import './A.css';

// const AForm = () => {
//   const [mandal, setMandal] = useState('');
//   const [gramPanchayat, setGramPanchayat] = useState('');
//   const [possession, setPossession] = useState('');
//   const [ownedDetailsVisible, setOwnedDetailsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     description: '',
//     surveyNo: '',
//     extent: '',
//     boundaries: '',
//     ownershipDetails: '',
//     layoutNo: '',
//     encroachment: '',
//     action: '',
//     beforePhoto: '',
//     afterPhoto: '',
//     remarks: ''
//   });

//   const mandals = [
//     'ADDATEEGALA-R', 'ANANTHAGIRI-R', 'ARAKU VALLEY-R', 'CHINTAPALLI-R', 'CHINTOOR-R',
//     'DEVIPATNAM-R', 'DUMBRIGUDA-R', 'G.K VEEDHI-R', 'G.MADUGULA-R', 'GANGAVARAM AGENCY-R',
//     'HUKUMPETA-R', 'KOYYURU-R', 'KUNAVARAM-R', 'MAREDUMILLI-R', 'MUNCHINGAPUTTU-R',
//     'NELLIPAKA-R', 'PADERU-R', 'PEDABAYALU-R', 'RAJAVOMMANGI-R', 'RAMPACHODAVARAM-R',
//     'VARARAMACHANDRAPURAM-R', 'Y.RAMAVARAM-R'
//   ];

//   const navigate = useNavigate();
//   const handleBack = () => {
//     navigate("/");  // navigate back to home
//   };

//   const handlePossessionChange = (e) => {
//     const value = e.target.value;
//     setPossession(value);
//     setOwnedDetailsVisible(value.toLowerCase() === 'owned');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       mandal,
//       gramPanchayat,
//       propertyDetails: {
//         description: formData.description,
//         surveyNo: formData.surveyNo,
//         extent: formData.extent,
//         boundaries: formData.boundaries
//       },
//       possessionDetails: {
//         type: possession,
//         ownershipDetails: formData.ownershipDetails,
//         layoutNo: formData.layoutNo
//       },
//       encroachmentDetails: {
//         identified: formData.encroachment,
//         actionTaken: formData.action
//       },
//       photos: {
//         beforePhoto: formData.beforePhoto,
//         afterPhoto: formData.afterPhoto
//       },
//       remarks: formData.remarks
//     };

//     try {
//       const response = await axios.post('http://localhost:4000/category-a', payload);
//       alert(response.data.message);
//     } catch (err) {
//       console.error(err);
//       alert('Error submitting the form');
//     }
//   };

//   return (
//     <div className="form">
//       <div className="top-left">
//         <button className="back-home-btn" onClick={handleBack}>
//           ⬅
//         </button>
//       </div>
//       <h1>Properties Identified in the Gram Panchayat</h1>
//       <h3>As per G.O.Ms.No.188, Dt: 21.07.2011-Category A</h3>
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="mandal">Name of the Mandal</label>
//             <select
//               id="mandal"
//               name="mandal"
//               value={mandal}
//               onChange={(e) => setMandal(e.target.value)}
//               required
//             >
//               <option value="">Select Mandal</option>
//               {mandals.map((mandalName) => (
//                 <option key={mandalName} value={mandalName}>
//                   {mandalName}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="gram-panchayat">Name of the Gram Panchayat</label>
//             <input
//               type="text"
//               id="gram-panchayat"
//               name="gram-panchayat"
//               value={gramPanchayat}
//               onChange={(e) => setGramPanchayat(e.target.value)}
//               required
//             />
//           </div>

//           {/* Property Details */}
//           <h3>Property Details</h3>
//           <div className="form-group">
//             <label htmlFor="description">Description of Property under Category - A</label>
//             <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
//           </div>

//           {/* Other Form Inputs */}
//           <div className="form-group">
//             <label htmlFor="survey-no">Survey No.</label>
//             <input
//               type="text"
//               id="survey-no"
//               name="surveyNo"
//               value={formData.surveyNo}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="extent">Extent</label>
//             <input
//               type="text"
//               id="extent"
//               name="extent"
//               value={formData.extent}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="boundaries">Boundaries</label>
//             <textarea
//               id="boundaries"
//               name="boundaries"
//               value={formData.boundaries}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Possession Details */}
//           <h3>Details of Possession</h3>
//           <div className="form-group">
//             <label htmlFor="possession">Possession (Owned / Gifted / Vested / Others)</label>
//             <select
//               id="possession"
//               name="possession"
//               value={possession}
//               onChange={handlePossessionChange}
//               required
//             >
//               <option value="">Select</option>
//               <option value="Owned">Owned</option>
//               <option value="Gifted">Gifted</option>
//               <option value="Vested">Vested</option>
//               <option value="Others">Others</option>
//             </select>
//           </div>

//           {ownedDetailsVisible && (
//             <>
//               <h3>If Owned - Details of Ownership</h3>
//               <div className="form-group">
//                 <label htmlFor="ownership">How it was owned by the Panchayat</label>
//                 <input
//                   type="text"
//                   id="ownership"
//                   name="ownershipDetails"
//                   value={formData.ownershipDetails}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="layout">If through Layout, Layout No.</label>
//                 <input
//                   type="text"
//                   id="layout"
//                   name="layoutNo"
//                   value={formData.layoutNo}
//                   onChange={handleChange}
//                 />
//               </div>
//             </>
//           )}

//           {/* Encroachment Details */}
//           <h3>Encroachments Identified</h3>
//           <div className="form-group">
//             <label htmlFor="encroachment">Encroachments Identified (if any)</label>
//             <textarea
//               id="encroachment"
//               name="encroachment"
//               value={formData.encroachment}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="action">Action taken for eviction of encroachment</label>
//             <textarea
//               id="action"
//               name="action"
//               value={formData.action}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Before/After Photos */}
//           <h3>Before/After Photos</h3>
//           <div className="form-group">
//             <label htmlFor="before-photo">Before Photo</label>
//             <input
//               type="file"
//               id="before-photo"
//               name="beforePhoto"
//               onChange={(e) => setFormData({ ...formData, beforePhoto: e.target.files[0] })}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="after-photo">After Photo</label>
//             <input
//               type="file"
//               id="after-photo"
//               name="afterPhoto"
//               onChange={(e) => setFormData({ ...formData, afterPhoto: e.target.files[0] })}
//             />
//           </div>

//           {/* Remarks */}
//           <h3>Remarks</h3>
//           <div className="form-group">
//             <label htmlFor="remarks">Remarks</label>
//             <textarea
//               id="remarks"
//               name="remarks"
//               value={formData.remarks}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

//  export default AForm;

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





