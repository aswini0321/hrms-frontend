
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
const  secretariats= [
'A.G.KODERU (10491259)',
'A.SENIVARAM (10390513)',
'ADAKULA (10390472)',
'ADDATEEGALA1 (10490852)',
'ADDATEEGALA2 (10490868)',
'ADUGULAPUT (10390706)',
'AKURU (10490675)',
'AMINABADA (10490836)',
'ANANTHAGIRI (10390625)',
'ANNAVARAM (10390514)',
'ARADAKOTA (10390707)',
'ARAKU (10390664)',
'ARAMA (10390665)',
'AYINADA (10390553)',
'B.VELAMAKOTA (10490676)',
'BABUSALA (10390722)',
'BADADANAMPALLI (10490837)',
'BAKULURU (10390473)',
'BAKURU (10390680)',
'BALAPAM (10390515)',
'BANDAPALLI (10490677)',
'BANGARAMPETA1 (10390474)',
'BANGARAMPETA2 (10390475)',
'BANGARUMETTA (10390723)',
'BARADA (10390724)',
'BASIKI (10390646)',
'BENNAVARAM (10390516)',
'BHEEMAVARAM (10390681)',
'BHEEMPOLU (10390626)',
'BHEERAM (10390535)',
'BODDAGANDI (10490869)',
'BODULURU (10490886)',
'BOITHILI (10390536)',
'BOLAGUNDA (10490678)',
'BONDAM (10390647)',
'BONDAPALLI (10390708)',
'BOORJA (10390682)',
'BORRA (10390627)',
'BOSUVALASA (10390666)',
'BUDARALLA (10390476)',
'BUNGAPUT (10390725)',
'BUSIPUTTU (10390726)',
'CH.R.PETA (10490665)',
'CHADALAVADA (10491260)',
'CHAMAGADDA (10490870)',
'CHATTI (10491261)',
'CHAVIDIKOTA (10490887)',
'CHAVITIDIBBALU (10490871)',
'CHEEDIPALEM (10390477)',
'CHERUKUMPALEM (10490838)',
'CHIDUMURU (10491262)',
'CHIKILINTA (10490839)',
'CHILAKALAGEDDA (10390628)',
'CHINALABABU (10390648)',
'CHINARUKURU (10491205)',
'CHINNAMATTAPALLI (10491232)',
'CHINTALAPLUDI (10490872)',
'CHINTALAVEEDHI (10390554)',
'CHINTAPLLI-1 (10390517)',
'CHINTAPLLI-2 (10390518)',
'CHINTAPLLI-3 (10390519)',
'CHINTOOR1 (10491263)',
'CHINTOOR2 (10491264)',
'CHITTEMPADU (10390478)',
'CHODAVARAM (10491216)',
'CHOMPI (10390649)',
'CHOWDUPALLI-1 (10390520)',
'CHOWDUPALLI-2 (10390521)',
'CHUCHIREVULAGUDEM (10491206)',
'D.BHEEMAVARAM (10490853)',
'D.N.PALEM (10490666)',
'D.RAMAVARAM (10490854)',
'D.V.KOTA (10490888)',
'DALIPADU (10490873)',
'DAMANAPALLI (10390495)',
'DARAGADDDA (10490874)',
'DARAKONDA-1 (10390496)',
'DARAKONDA-2 (10390497)',
'DARELA (10390727)',
'DEMUDUVALASA (10390667)',
'DEVAPURAM (10390555)',
'DEVARAMADUGULA (10490875)',
'DEVARAPALLI (10390498)',
'DEVIPATNAM1 (10490667)',
'DEVIPATNAM2 (10490668)',
'DHANYAMPALEM (10490855)',
'DOKULURU (10390556)',
'DOWNURU (10390479)',
'DUCHARTHI (10490856)',
'DUPPULAVASA (10390499)',
'DURGAM (10390683)',
'DUSARIPAMU (10490840)',
'EDUGURALLAPALLI (10491265)',
'FOULKSPETA (10490679)',
'G.K.VEEDHI-1 (10390500)',
'G.K.VEEDHI-2 (10390501)',
'G.M.VALASA (10490889)',
'G.MADUGULA-1 (10390537)',
'G.MADUGULA-2 (10390538)',
'GADIKINCHUMANDA (10390684)',
'GADUTHURU (10390539)',
'GADUVAKURTHI (10490841)',
'GALIKONDA (10390502)',
'GAMPARAI (10390709)',
'GANGAVARAM (10490697)',
'GANGAVARAM (10491217)',
'GANNELA (10390650)',
'GANNERUPUTTU (10390685)',
'GASABA (10390668)',
'GATTUM (10390686)',
'GAVARAYYAPETA (10490857)',
'GEDELABANDA (10390669)',
'GEMMELI (10390540)',
'GINNELAKOTA (10390710)',
'GOMANGI (10390711)',
'GOMMUKOTHAGUDEM (10491218)',
'GONDELI (10390557)',
'GONDIPAKALU (10390522)',
'GONDOLU (10490858)',
'GONTUVANIPALEM (10490859)',
'GOWRIDEVIETA (10491219)',
'GUDA (10390687)',
'GUDURU (10491266)',
'GUMMA (10390629)',
'GUMMAKOTA (10390630)',
'GUMMIREVULU (10390503)',
'GUNDALA (10491220)',
'GUNTAGANNELA (10390670)',
'GUNTASEEMA (10390671)',
'GURTHEDU (10490876)',
'GUTTULAPUTTU (10390558)',
'HUKUMPETA (10390688)',
'I.POLAVARAM (10490680)',
'INDUKURU (10490669)',
'INDUKURUPETA (10490670)',
'INJARI (10390712)',
'IRADAPALLE (10390559)',
'IRAGAI (10390651)',
'JADDANGI (10490842)',
'JAGGAMPALEM (10490698)',
'JAGGAVARAM (10491207)',
'JAMIGUDA (10390713)',
'JARJULA (10390728)',
'JARRAKONDA (10390689)',
'JEEDIGUPPA (10491237)',
'JEENABADU (10390631)',
'JERILA (10390504)',
'JOLAPUT (10390729)',
'K.KODAPALLI (10390541)',
'K.YERRAGONDA (10490877)',
'KANDRUM (10390672)',
'KANIVADA (10490878)',
'KANNAIGUDEM (10491221)',
'KANTARAM (10390480)',
'KARAKAGUDEM (10491208)',
'KARIMUKHIPUTTU (10390730)',
'KASIPATNAM (10390632)',
'KILAGADA (10390731)',
'KIMMURU (10490860)',
'KIMUDUPALLI (10390714)',
'KINACHAIPUTTU (10390732)',
'KINCHUMANDA (10390673)',
'KINDRA (10490843)',
'KITHALANGI (10390674)',
'KITUMULA (10390523)',
'KIVARLA (10390633)',
'KOMMANGI (10390524)',
'KOMMIKA (10390481)',
'KONALOVA (10490861)',
'KONDAGOKIRI (10390482)',
'KONDAMODALU (10490671)',
'KONDIBA (10390634)',
'KONDRAJUPETA (10491209)',
'KONTNAPALLI (10390690)',
'KORAPALLI (10390542)',
'KORRA (10390675)',
'KORRAI (10390676)',
'KOTA (10490879)',
'KOTHABALLUGUDA (10390652)',
'KOTHADA (10490703)',
'KOTHAPALEM-1 (10390525)',
'KOTHAPALEM-2 (10390526)',
'KOTTURU (10390635)',
'KOYYURU (10390483)',
'KUDUMSARI (10390527)',
'KUMADA (10390733)',
'KUMMURU (10491267)',
'KUNAVARAM (10491210)',
'KUNTHARLA (10390715)',
'KURIDI (10390677)',
'KUTRAWADA (10490890)',
'KUTURU (10491211)',
'LABBARTHI (10490844)',
'LAGISAPALLE (10390560)',
'LAKKAVARAPUPETA (10390505)',
'LAKKONDA (10490707)',
'LAKSHMIPURAM (10491222)',
'LAMMASINGI (10390528)',
'LAXMIPURAM (10390734)',
'LINGETI (10390716)',
'LODODDI (10490845)',
'LOTHERU (10390653)',
'LOTHUGEDDA (10390529)',
'LUNGAPARTHI (10390636)',
'M.BHEEMAVARAM (10390484)',
'M.MAKAVARAM (10390485)',
'MADAGADA-1 (10390654)',
'MADAGADA-2 (10390655)',
'MADALA (10390656)',
'MADICHERLA (10490681)',
'MAKAVARAM (10390735)',
'MAMPA (10390486)',
'MAREDUMILLI (10490891)',
'MARRIPALEM (10490708)',
'MARRIWADA (10390487)',
'MATTAM (10390691)',
'MATYAPURAM (10390692)',
'METTUJORU (10390693)',
'MINUMULURU (10390561)',
'MOHANAPURAM (10490710)',
'MOLLERU (10490711)',
'MONDIGEDDA (10390506)',
'MOTHUGUDEM (10491268)',
'MUKUNURU (10491269)',
'MULAKANAPALLI (10491240)',
'MULIYAPUTTU (10390694)',
'MUSURUMILLI (10490682)',
'NADIMPALEM (10390488)',
'NANDIGAMA (10491223)',
'NARASIMHARAJAPURAM (10390637)',
'NELLIPAKA (10491224)',
'NELLIPUDI (10490712)',
'NURMATHI (10390543)',
'OLDA (10390695)',
'P.YERRAGONDA (10490880)',
'PADAMPURAM-1 (10390657)',
'PADAMPURAM-2 (10390658)',
'PADERU-1 (10390562)',
'PADERU-2 (10390563)',
'PADERU-3 (10390564)',
'PALAMAMIDI (10390544)',
'PANASALAPLALEM (10490881)',
'PARREDA (10390717)',
'PATHAKOTA (10390696)',
'PATHAKOTA (10490882)',
'PATTAM (10390697)',
'PEDABARADA (10390530)',
'PEDABIDDA (10390638)',
'PEDAGADDADA (10490683)',
'PEDAGUDA (10390736)',
'PEDAKODAPALLI (10390718)',
'PEDAKOTA (10390639)',
'PEDALABUDU-1 (10390659)',
'PEDALABUDU-2 (10390660)',
'PEDALABUDU-3 (10390661)',
'PEDALOCHALI (10390545)',
'PEDALUVVASINGI (10390546)',
'PEDAVALASA (10390507)',
'PEDDAMATTAPALLI (10491244)',
'PEDDARUKURU (10491212)',
'PEGA (10491270)',
'PICHUKALAPADU (10491225)',
'PIDATHAMAMIDI (10490716)',
'PINAKOTA (10390640)',
'POCHAVARAM (10491213)',
'POTHANGI (10390678)',
'PUDIPALLI (10490672)',
'PYNAMPADU (10390641)',
'RAJAVOMMANGI1 (10490846)',
'RAJAVOMMANGI2 (10490847)',
'RAJUPETA (10491245)',
'RAMAVARAM (10491246)',
'RAMPA (10490684)',
'RAMPACHODAVARAM1 (10490685)',
'RAMPACHODAVARAM2 (10490686)',
'RAMPACHODAVARAM3 (10490687)',
'RANGASEELA (10390698)',
'RAPA (10390699)',
'RAVANAPALLI (10390489)',
'RAYAPALLI (10490862)',
'RAYAVANAPETA (10491226)',
'REGULAPADU (10491214)',
'REJENDRAPALEM (10390490)',
'REKHAPALLI (10491247)',
'REVALLU (10390491)',
'RINTHADA-1 (10390508)',
'RINTHADA-2 (10390509)',
'ROMPALLI (10390642)',
'RUDAKOTA (10390719)',
'SAGARA (10390679)',
'SALUGU (10390565)',
'SANKADA (10390510)',
'SANTHARI (10390700)',
'SARABHANNAPALEM1 (10390492)',
'SARABHANNAPALEM2 (10390493)',
'SARABHAVARAM (10490673)',
'SARABHAVARAM (10490848)',
'SEEKARI (10390720)',
'SILERU (10390511)',
'SINGARBHA (10390547)',
'SITAGUNTA (10390721)',
'SOBHAKOTA (10390701)',
'SOLABHAM-1 (10390548)',
'SOLABHAM-2 (10390549)',
'SRIGAM (10390662)',
'SUJANAKOTA (10390737)',
'SUKURU (10390702)',
'SUNKARAMETTA (10390663)',
'SUNNAMPADU (10490892)',
'TADEPALLI (10490893)',
'TAJANGI-1 (10390531)',
'TAJANGI-2 (10390532)',
'TAMARAPALLI (10490688)',
'TEEGALAVALASA (10390703)',
'THADIGIRI (10390704)',
'THADIPUTTU (10390705)',
'THAMMANGULA (10390533)',
'THANTIKONDA (10490849)',
'THIMMAPURAM (10490863)',
'THUMPADA (10390566)',
'THUNGAMADUGULA (10490864)',
'TOKURU (10390643)',
'TRIPURAPENTAVEDU (10491227)',
'TUMMALA (10491271)',
'U.CHEEDIPALEM (10390494)',
'V.R.PALEM (10490674)',
'VACHULA (10390512)',
'VALASI (10390644)',
'VANJARI-1 (10390550)',
'VANJARI-2 (10390551)',
'VANTHADAPALLE (10390567)',
'VANTHALA (10390552)',
'VANTHALAMAMIDI (10390568)',
'VANUGUMMA (10390738)',
'VATHANGI (10490850)',
'VEERAVARAM (10490865)',
'VEMULAKONDA (10490689)',
'VENKATAYAPALEM (10491215)',
'VETAMAMIDI (10490866)',
'VISSAPURAM (10491228)',
'VONCHANGI (10490851)',
'VOOTLA (10490690)',
'WADDIGUDEM (10491256)',
'Y.RAMAVARAM (10490883)',
'YARLAGADDA (10490884)',
'YEGUVASOBHA (10390645)',
'YELLAVARAM (10490867)',
'YENUGURAI (10390739)',
'YERRABOMMALU (10390534)',
'YERRAMREDDIPALEM (10490885)',
'YETAPAKA (10491229)',
'ZADERU (10490723)'
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
            <label>Date of Joining (First Recruitment) </label>
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





