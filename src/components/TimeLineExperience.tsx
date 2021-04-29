import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from '../../styles/components/TimeLineExperience.module.css'

export default function TimeLineExperience() {
  return (
    <Timeline align="alternate" className={styles.container}>

      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FlashOnIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={styles.Paper}>
              <p>may 2019 - june 2019</p>
              <span>ANEEL - National Electric Energy Agency</span>
              <p>Data Science Manager</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <LocalHospitalIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={styles.Paper2}>
              <p>june 2019 - december 2019</p>
              <span>Medipreço</span>
              <p>Front-end Developer</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <DeleteIcon />
          </TimelineDot>
          <TimelineConnector className={styles.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={styles.Paper}>
            <p>june 2020 - october 2020</p>
            <span>ANCAT</span>
            <p>Project analyst</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <DriveEtaIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent >
          <Paper elevation={3} className={styles.Paper2}>
            <p>march 2021 - at the moment</p>
            <span>AutoForce</span>
            <p>Full-Stack Developer</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}