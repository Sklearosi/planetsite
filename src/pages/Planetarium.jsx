import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function Planetarium (props) {

    const {name} = useParams()
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    let planetObj
    planetObj = props.datas.find((planeta) => planeta.name === name)

    const [num, setNum] = useState(0)
    return(
        <>
        <ul>
            <li style={num === 0 && windowWidth >= 768
    ? { border:`1px solid rgba(255, 255, 255, 0.712)`, backgroundColor:`${planetObj.color}`}
    : num === 0
    ? { borderBottom: `3px solid ${planetObj.color}` }
    : null} onClick={() => {setNum(0)}}>{windowWidth < 768 ?'Overview' : '01 overview'}</li>
            <li style={num === 1 && windowWidth >= 768
    ? { border:`1px solid rgba(255, 255, 255, 0.712)`, backgroundColor:`${planetObj.color}`}
    : num === 1
    ? { borderBottom: `3px solid ${planetObj.color}` }
    : null} onClick={() => {setNum(1)}}>{windowWidth < 768 ?'structure' : '02 Internal Structure'}</li>
            <li style={num === 2 && windowWidth >= 768
    ? { border:`1px solid rgba(255, 255, 255, 0.712)`, backgroundColor:`${planetObj.color}`}
    : num === 2
    ? { borderBottom: `3px solid ${planetObj.color}` }
    : null} onClick={() => {setNum(2)}}>{windowWidth < 768 ?'surface' : '03 Surface Geology'}</li>
        </ul>
        <div className="all">
          <div className="planetImgs">
        {num === 0 ? <img style={windowWidth < 768 ?{width: `${planetObj.mobWidth}`} : windowWidth >= 768 && windowWidth < 1440 ? {width: `${planetObj.tabWidth}`} : windowWidth >= 1440 ? {width: `${planetObj.desktopWidth}`} : null} className="planet" src={planetObj.images.planet} alt="" /> : null}
        {num === 1 ? <img className="planet" style={windowWidth < 768 ?{width: `${planetObj.mobWidth}`} : windowWidth >= 768 && windowWidth < 1440 ? {width: `${planetObj.tabWidth}`} : windowWidth >= 1440 ? {width: `${planetObj.desktopWidth}`} : null} src={planetObj.images.internal} alt="" /> : null}
        <div className="geology">
        {num === 2 ?  <img className="planet" style={windowWidth < 768 ?{width: `${planetObj.mobWidth}`} : windowWidth >= 768 && windowWidth < 1440 ? {width: `${planetObj.tabWidth}`} : windowWidth >= 1440 ? {width: `${planetObj.desktopWidth}`} : null} src={planetObj.images.planet} alt="" /> : null}
        {num === 2 ? <img className="onPlanetMark" src={planetObj.images.geology} alt="" /> : null}
        </div>
        </div>
        <div className="contentDiv">
          <div className="container">
    <p className="planetName">{planetObj.name}</p>
    {num === 0 ? <p className="content">{planetObj.overview.content}</p> : null}
    {num === 0 ? <div className="sourceDiv"><p>Source:</p><a href={planetObj.overview.source}>Wikipedia</a><img href={planetObj.overview.source} className="bsr" src="/assets/icon-source.svg" alt="" /></div> : null}
    {num === 1 ? <p className="content">{planetObj.structure.content}</p> : null}
    {num === 1 ? <div className="sourceDiv"><p>Source:</p><a href={planetObj.structure.source}>Wikipedia</a><img href={planetObj.overview.source} className="bsr" src="/assets/icon-source.svg" alt="" /></div> : null}
    {num === 2 ? <p className="content">{planetObj.geology.content}</p> : null}
    {num === 2 ? <div className="sourceDiv"><p>Source:</p><a href={planetObj.geology.source}>Wikipedia</a><img href={planetObj.overview.source} className="bsr" src="/assets/icon-source.svg" alt="" /></div> : null}
    </div>
    <ul className="secondUl">
            <li style={num === 0 && windowWidth >= 768
    ? { border:`1px solid rgba(255, 255, 255, 0.712)`, backgroundColor:`${planetObj.color}`}
    : num === 0
    ? { borderBottom: `3px solid ${planetObj.color}` }
    : null} onClick={() => {setNum(0)}}>{windowWidth < 768 ?'Overview' : '01 overview'}</li>
            <li style={num === 1 && windowWidth >= 768
    ? { border:`1px solid rgba(255, 255, 255, 0.712)`, backgroundColor:`${planetObj.color}`}
    : num === 1
    ? { borderBottom: `3px solid ${planetObj.color}` }
    : null} onClick={() => {setNum(1)}}>{windowWidth < 768 ?'structure' : '02 Internal Structure'}</li>
            <li style={num === 2 && windowWidth >= 768
    ? { border:`1px solid rgba(255, 255, 255, 0.712)`, backgroundColor:`${planetObj.color}`}
    : num === 2
    ? { borderBottom: `3px solid ${planetObj.color}` }
    : null} onClick={() => {setNum(2)}}>{windowWidth < 768 ?'surface' : '03 Surface Geology'}</li>
        </ul>
    </div>
    </div>

     <div className="infos">
        <div className="info"><p>Rotation Time</p> <p>{planetObj.rotation}</p></div>
        <div className="info"><p>Revolution Time</p> <p>{planetObj.revolution}</p></div>
        <div className="info"><p>Radius</p> <p>{planetObj.radius}</p></div>
        <div className="info"><p>Average Temp.</p> <p>{planetObj.temperature}</p></div>
    </div>
        </>
    )
}

export default Planetarium