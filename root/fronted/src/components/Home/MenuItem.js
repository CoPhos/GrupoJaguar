import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function MenuItem(props) {
  return (
    <Box sx={{ marginBottom: '8px' }}>
      <Link
        to={props.link}
        css={css`
          text-decoration: none;
          color: black;
          &:hover {
            color: #008433;
          }
        `}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #008433',
            margin: '0 20px'
          }}
        >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, margin: '10px' }}>
            {props.text}
          </Typography>
          <ArrowForwardIcon sx={{ margin: '10px' }}></ArrowForwardIcon>
        </Box>
      </Link>
    </Box>
  )
}

export default MenuItem
