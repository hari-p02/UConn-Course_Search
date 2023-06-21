import React from 'react'
import "./Filter.css"
const Filter = () => {
  return (
          <div className='filter-options'>
          <form class="form2">
              <label for="allcourses">All Courses</label>
              <input id="allcourses" type="radio" name="r" value="1"/>
              <label for="uc">Undergraduate Catalog</label>
              <input id="uc" type="radio" name="r" value="2"/>
              <label for="gc">Graduate Catalog</label>
              <input id="gc" type="radio" name="r" value="3"/>
          </form>
          <div className='dept-search'>
          {/* <input type="text" name="search" placeholder="Search For AnyThink.." class="input2"/> */}
          <form class="form2" style={{overflowY : "scroll"}}>
            <label for='ACCT'>ACCT</label> 
            <input id='ACCT' type='radio' name='dept' value='ACCT'/>
            <label for='AFRI'>AFRI</label> 
            <input id='AFRI' type='radio' name='dept' value='AFRI'/>
            <label for='AFRA'>AFRA</label> 
            <input id='AFRA' type='radio' name='dept' value='AFRA'/>
            <label for='ARE'>ARE</label> 
            <input id='ARE' type='radio' name='dept' value='ARE'/>
            <label for='AGNR'>AGNR</label> 
            <input id='AGNR' type='radio' name='dept' value='AGNR'/>
            <label for='AIRF'>AIRF</label> 
            <input id='AIRF' type='radio' name='dept' value='AIRF'/>
            <label for='AH'>AH</label> 
            <input id='AH' type='radio' name='dept' value='AH'/>
            <label for='ASLN'>ASLN</label> 
            <input id='ASLN' type='radio' name='dept' value='ASLN'/>
            <label for='AMST'>AMST</label> 
            <input id='AMST' type='radio' name='dept' value='AMST'/>
            <label for='ANSC'>ANSC</label> 
            <input id='ANSC' type='radio' name='dept' value='ANSC'/>
            <label for='ANTH'>ANTH</label> 
            <input id='ANTH' type='radio' name='dept' value='ANTH'/>
            <label for='ARAB'>ARAB</label> 
            <input id='ARAB' type='radio' name='dept' value='ARAB'/>
            <label for='ARIS'>ARIS</label> 
            <input id='ARIS' type='radio' name='dept' value='ARIS'/>
            <label for='ART'>ART</label> 
            <input id='ART' type='radio' name='dept' value='ART'/>
            <label for='ARTH'>ARTH</label> 
            <input id='ARTH' type='radio' name='dept' value='ARTH'/>
            <label for='AAAS'>AAAS</label> 
            <input id='AAAS' type='radio' name='dept' value='AAAS'/>
            <label for='BIOL'>BIOL</label> 
            <input id='BIOL' type='radio' name='dept' value='BIOL'/>
            <label for='BME'>BME</label> 
            <input id='BME' type='radio' name='dept' value='BME'/>
            <label for='BUSN'>BUSN</label> 
            <input id='BUSN' type='radio' name='dept' value='BUSN'/>
            <label for='BADM'>BADM</label> 
            <input id='BADM' type='radio' name='dept' value='BADM'/>
            <label for='BLAW'>BLAW</label> 
            <input id='BLAW' type='radio' name='dept' value='BLAW'/>
            <label for='CHEG'>CHEG</label> 
            <input id='CHEG' type='radio' name='dept' value='CHEG'/>
            <label for='CHEM'>CHEM</label> 
            <input id='CHEM' type='radio' name='dept' value='CHEM'/>
            <label for='CHIN'>CHIN</label> 
            <input id='CHIN' type='radio' name='dept' value='CHIN'/>
            <label for='CE'>CE</label> 
            <input id='CE' type='radio' name='dept' value='CE'/>
            <label for='CAMS'>CAMS</label> 
            <input id='CAMS' type='radio' name='dept' value='CAMS'/>
            <label for='COGS'>COGS</label> 
            <input id='COGS' type='radio' name='dept' value='COGS'/>
            <label for='COMM'>COMM</label> 
            <input id='COMM' type='radio' name='dept' value='COMM'/>
            <label for='CLCS'>CLCS</label> 
            <input id='CLCS' type='radio' name='dept' value='CLCS'/>
            <label for='CSE'>CSE</label> 
            <input id='CSE' type='radio' name='dept' value='CSE'/>
            <label for='CRLP'>CRLP</label> 
            <input id='CRLP' type='radio' name='dept' value='CRLP'/>
            <label for='DGS'>DGS</label> 
            <input id='DGS' type='radio' name='dept' value='DGS'/>
            <label for='DIET'>DIET</label> 
            <input id='DIET' type='radio' name='dept' value='DIET'/>
            <label for='DMD'>DMD</label> 
            <input id='DMD' type='radio' name='dept' value='DMD'/>
            <label for='DRAM'>DRAM</label> 
            <input id='DRAM' type='radio' name='dept' value='DRAM'/>
            <label for='DSDA'>DSDA</label> 
            <input id='DSDA' type='radio' name='dept' value='DSDA'/>
            <label for='ERTH'>ERTH</label> 
            <input id='ERTH' type='radio' name='dept' value='ERTH'/>
            <label for='EEB'>EEB</label> 
            <input id='EEB' type='radio' name='dept' value='EEB'/>
            <label for='ECON'>ECON</label> 
            <input id='ECON' type='radio' name='dept' value='ECON'/>
            <label for='EGEN'>EGEN</label> 
            <input id='EGEN' type='radio' name='dept' value='EGEN'/>
            <label for='EDCI'>EDCI</label> 
            <input id='EDCI' type='radio' name='dept' value='EDCI'/>
            <label for='EDLR'>EDLR</label> 
            <input id='EDLR' type='radio' name='dept' value='EDLR'/>
            <label for='EPSY'>EPSY</label> 
            <input id='EPSY' type='radio' name='dept' value='EPSY'/>
            <label for='ECE'>ECE</label> 
            <input id='ECE' type='radio' name='dept' value='ECE'/>
            <label for='ENGR'>ENGR</label> 
            <input id='ENGR' type='radio' name='dept' value='ENGR'/>
            <label for='ENGL'>ENGL</label> 
            <input id='ENGL' type='radio' name='dept' value='ENGL'/>
            <label for='ENVE'>ENVE</label> 
            <input id='ENVE' type='radio' name='dept' value='ENVE'/>
            <label for='ENVS'>ENVS</label> 
            <input id='ENVS' type='radio' name='dept' value='ENVS'/>
            <label for='EVST'>EVST</label> 
            <input id='EVST' type='radio' name='dept' value='EVST'/>
            <label for='ES'>ES</label> 
            <input id='ES' type='radio' name='dept' value='ES'/>
            <label for='FNCE'>FNCE</label> 
            <input id='FNCE' type='radio' name='dept' value='FNCE'/>
            <label for='FINA'>FINA</label> 
            <input id='FINA' type='radio' name='dept' value='FINA'/>
            <label for='FREN'>FREN</label> 
            <input id='FREN' type='radio' name='dept' value='FREN'/>
            <label for='GPS'>GPS</label> 
            <input id='GPS' type='radio' name='dept' value='GPS'/>
            <label for='GEOG'>GEOG</label> 
            <input id='GEOG' type='radio' name='dept' value='GEOG'/>
            <label for='GERM'>GERM</label> 
            <input id='GERM' type='radio' name='dept' value='GERM'/>
            <label for='HCMI'>HCMI</label> 
            <input id='HCMI' type='radio' name='dept' value='HCMI'/>
            <label for='HEJS'>HEJS</label> 
            <input id='HEJS' type='radio' name='dept' value='HEJS'/>
            <label for='HIND'>HIND</label> 
            <input id='HIND' type='radio' name='dept' value='HIND'/>
            <label for='HIST'>HIST</label> 
            <input id='HIST' type='radio' name='dept' value='HIST'/>
            <label for='HDFS'>HDFS</label> 
            <input id='HDFS' type='radio' name='dept' value='HDFS'/>
            <label for='HRTS'>HRTS</label> 
            <input id='HRTS' type='radio' name='dept' value='HRTS'/>
            <label for='INDS'>INDS</label> 
            <input id='INDS' type='radio' name='dept' value='INDS'/>
            <label for='INTD'>INTD</label> 
            <input id='INTD' type='radio' name='dept' value='INTD'/>
            <label for='IRIS'>IRIS</label> 
            <input id='IRIS' type='radio' name='dept' value='IRIS'/>
            <label for='ILCS'>ILCS</label> 
            <input id='ILCS' type='radio' name='dept' value='ILCS'/>
            <label for='JAPN'>JAPN</label> 
            <input id='JAPN' type='radio' name='dept' value='JAPN'/>
            <label for='JOUR'>JOUR</label> 
            <input id='JOUR' type='radio' name='dept' value='JOUR'/>
            <label for='KINS'>KINS</label> 
            <input id='KINS' type='radio' name='dept' value='KINS'/>
            <label for='KORE'>KORE</label> 
            <input id='KORE' type='radio' name='dept' value='KORE'/>
            <label for='LAND'>LAND</label> 
            <input id='LAND' type='radio' name='dept' value='LAND'/>
            <label for='LLAS'>LLAS</label> 
            <input id='LLAS' type='radio' name='dept' value='LLAS'/>
            <label for='LING'>LING</label> 
            <input id='LING' type='radio' name='dept' value='LING'/>
            <label for='MEM'>MEM</label> 
            <input id='MEM' type='radio' name='dept' value='MEM'/>
            <label for='MENT'>MENT</label> 
            <input id='MENT' type='radio' name='dept' value='MENT'/>
            <label for='MARN'>MARN</label> 
            <input id='MARN' type='radio' name='dept' value='MARN'/>
            <label for='MAST'>MAST</label> 
            <input id='MAST' type='radio' name='dept' value='MAST'/>
            <label for='MKTG'>MKTG</label> 
            <input id='MKTG' type='radio' name='dept' value='MKTG'/>
            <label for='MSE'>MSE</label> 
            <input id='MSE' type='radio' name='dept' value='MSE'/>
            <label for='MATH'>MATH</label> 
            <input id='MATH' type='radio' name='dept' value='MATH'/>
            <label for='ME'>ME</label> 
            <input id='ME' type='radio' name='dept' value='ME'/>
            <label for='MLSC'>MLSC</label> 
            <input id='MLSC' type='radio' name='dept' value='MLSC'/>
            <label for='MISI'>MISI</label> 
            <input id='MISI' type='radio' name='dept' value='MISI'/>
            <label for='MGRK'>MGRK</label> 
            <input id='MGRK' type='radio' name='dept' value='MGRK'/>
            <label for='MCB'>MCB</label> 
            <input id='MCB' type='radio' name='dept' value='MCB'/>
            <label for='MUSI'>MUSI</label> 
            <input id='MUSI' type='radio' name='dept' value='MUSI'/>
            <label for='NRE'>NRE</label> 
            <input id='NRE' type='radio' name='dept' value='NRE'/>
            <label for='NURS'>NURS</label> 
            <input id='NURS' type='radio' name='dept' value='NURS'/>
            <label for='NUSC'>NUSC</label> 
            <input id='NUSC' type='radio' name='dept' value='NUSC'/>
            <label for='OSH'>OSH</label> 
            <input id='OSH' type='radio' name='dept' value='OSH'/>
            <label for='OPIM'>OPIM</label> 
            <input id='OPIM' type='radio' name='dept' value='OPIM'/>
            <label for='PATH'>PATH</label> 
            <input id='PATH' type='radio' name='dept' value='PATH'/>
            <label for='PERS'>PERS</label> 
            <input id='PERS' type='radio' name='dept' value='PERS'/>
            <label for='PHAR'>PHAR</label> 
            <input id='PHAR' type='radio' name='dept' value='PHAR'/>
            <label for='PHRX'>PHRX</label> 
            <input id='PHRX' type='radio' name='dept' value='PHRX'/>
            <label for='PHIL'>PHIL</label> 
            <input id='PHIL' type='radio' name='dept' value='PHIL'/>
            <label for='PHYS'>PHYS</label> 
            <input id='PHYS' type='radio' name='dept' value='PHYS'/>
            <label for='PNB'>PNB</label> 
            <input id='PNB' type='radio' name='dept' value='PNB'/>
            <label for='PLSH'>PLSH</label> 
            <input id='PLSH' type='radio' name='dept' value='PLSH'/>
            <label for='POLS'>POLS</label> 
            <input id='POLS' type='radio' name='dept' value='POLS'/>
            <label for='PORT'>PORT</label> 
            <input id='PORT' type='radio' name='dept' value='PORT'/>
            <label for='PSYC'>PSYC</label> 
            <input id='PSYC' type='radio' name='dept' value='PSYC'/>
            <label for='PUBH'>PUBH</label> 
            <input id='PUBH' type='radio' name='dept' value='PUBH'/>
            <label for='PP'>PP</label> 
            <input id='PP' type='radio' name='dept' value='PP'/>
            <label for='RUSS'>RUSS</label> 
            <input id='RUSS' type='radio' name='dept' value='RUSS'/>
            <label for='SARE'>SARE</label> 
            <input id='SARE' type='radio' name='dept' value='SARE'/>
            <label for='SAAG'>SAAG</label> 
            <input id='SAAG' type='radio' name='dept' value='SAAG'/>
            <label for='SAAS'>SAAS</label> 
            <input id='SAAS' type='radio' name='dept' value='SAAS'/>
            <label for='SANR'>SANR</label> 
            <input id='SANR' type='radio' name='dept' value='SANR'/>
            <label for='SAPB'>SAPB</label> 
            <input id='SAPB' type='radio' name='dept' value='SAPB'/>
            <label for='SAPL'>SAPL</label> 
            <input id='SAPL' type='radio' name='dept' value='SAPL'/>
            <label for='SCI'>SCI</label> 
            <input id='SCI' type='radio' name='dept' value='SCI'/>
            <label for='SOWK'>SOWK</label> 
            <input id='SOWK' type='radio' name='dept' value='SOWK'/>
            <label for='SOCI'>SOCI</label> 
            <input id='SOCI' type='radio' name='dept' value='SOCI'/>
            <label for='SOIL'>SOIL</label> 
            <input id='SOIL' type='radio' name='dept' value='SOIL'/>
            <label for='SPAN'>SPAN</label> 
            <input id='SPAN' type='radio' name='dept' value='SPAN'/>
            <label for='SLHS'>SLHS</label> 
            <input id='SLHS' type='radio' name='dept' value='SLHS'/>
            <label for='STAT'>STAT</label> 
            <input id='STAT' type='radio' name='dept' value='STAT'/>
            <label for='SPSS'>SPSS</label> 
            <input id='SPSS' type='radio' name='dept' value='SPSS'/>
            <label for='TRST'>TRST</label> 
            <input id='TRST' type='radio' name='dept' value='TRST'/>
            <label for='UNIV'>UNIV</label> 
            <input id='UNIV' type='radio' name='dept' value='UNIV'/>
            <label for='URBN'>URBN</label> 
            <input id='URBN' type='radio' name='dept' value='URBN'/>
            <label for='VIET'>VIET</label> 
            <input id='VIET' type='radio' name='dept' value='VIET'/>
            <label for='WGSS'>WGSS</label> 
            <input id='WGSS' type='radio' name='dept' value='WGSS'/>
          </form>
          </div>
          </div>
  )
}

export default Filter