import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideo } from '../service/allapi'





function View({serverRes}) {

  const [allVideos, setallvideos] = useState([])

  const [deleteStatus,setdeleteStatus]=useState(false)

  // useEffect 

  useEffect(() => {

    getallVideos()

  }, [serverRes,deleteStatus])

  const handleDeletestatus=(res)=>{
    setdeleteStatus(res)
  }


  // define a function for api call

  const getallVideos = async () => {

    // api call

    const response = await getVideo()
    // console.log(response.data);
    setallvideos(response.data)

  }

  console.log(allVideos);

  return (
    <>

      <div className='border p-3 rounded m-4'>

        <Row>

          {
            allVideos.map(video => (

              <Col sm={12} md={6}>

                <VideoCard card={video} handleDeletestatus={handleDeletestatus} />

              </Col>

            ))

          }


        </Row>


      </div>

    </>
  )
}

export default View