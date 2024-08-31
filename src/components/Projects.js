import React from 'react'
import '../styles/Projects.css'
import HomePagePic from '../images/HomePage.svg'

//mui imports
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const f1ProjectPoints = ['Developed and deployed with React and FireBase', 'Displays real-time driver and team rankings, comprehensive statistics, race schedules, and detailed results for both current and past races.' ];

const F1Photos = [
  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-1.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-2.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-3.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-5.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-6.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-7.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-8.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-9.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-10.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-11.png')
  },

]

const vitAlertProjectPoints = ['Developed and deployed with React and FireBase', 'Nutrient tracking website using Edamam Food API that alerts users of deficiencies and possible side effects.']

const vitAlertPhotos = [
  {
    title: 'Photo',
    img: require('../VitAlert Demo Photos/Vit-1.png')
  },

  {
    title: 'Photo',
    img: require('../VitAlert Demo Photos/Vit-3.png')
  },

  {
    title: 'Photo',
    img: require('../VitAlert Demo Photos/Vit-2.png')
  },
]

function Image({ src }) {
  return <img style={{ padding: 20, borderRadius : '3em' }} src={src}></img>
}

function Project({projectName, photoAlbum, projectPoints, cols}) {
  return (
    <div className='project'>
      <Box component={'section'}
          sx={{ p: 2, border: '1px solid grey',
                width:'80%',
                margin: '0 auto',
                backgroundColor: '#ADB5BD',
                borderRadius: '1em',
                boxShadow: '0 0 2rem #6C757D',
                marginBottom: '30px' 
          }}>
            
      <Stack
      direction={'column'}
      textAlign={'center'}>
        <h2 style={{ color: '#212529', marginTop : 0, fontFamily: 'Roboto-BoldItalic'}}>{projectName}</h2>
        <ul style={{ paddingLeft: 40, textAlign: 'left', marginTop: 0, fontSize: '20px'}}>
          {projectPoints.map((entry) => {
            return <li style={{ color: '#212529', fontFamily: 'Roboto-MediumItalic'}}>{entry}</li>
          })}

        </ul>

        <ImageList sx={{ width: '100%', height: 'auto', marginTop : 0 }} cols={cols} rowHeight='auto'>
      {photoAlbum.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius : '2em' }}
          />
        </ImageListItem>
      ))}
    </ImageList>


      </Stack>
      </Box>



    </div>
  )
}

function Projects() {
  return (
    <div className='projects-container'>
      <h2 className='projects-header'>Projects</h2>

          
          <Project projectName={'F1-Showcase'} photoAlbum={F1Photos} projectPoints={f1ProjectPoints} cols={2}></Project>
          
          <Project projectName={'VitAlert'} photoAlbum={vitAlertPhotos} projectPoints={vitAlertProjectPoints} cols={3}></Project>
          
          
    </div>
  )
}

export default Projects