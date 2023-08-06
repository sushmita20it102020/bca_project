
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
// this is a api call from frontend to firestore database located at south east asia zone (mumbai region)
import 
import './App.css';
function App() {
  return (
    <>

    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Hi! I am SRMBOT. Welcome to SRM. Please type assist.',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        
        {
          id: '3',
          message: 'These are the areas in which I can assist',
          trigger: '4',
        },
        {
          id: '4',
          options: [
            { value: 'admission', label: 'admission', trigger: '5' },
            { value: 'courses', label: 'course', trigger: '6' },
            { value: 'fee details', label: 'fee details', trigger: '7' },
          ],
        },
        {
          id: '5',
          options: [
            { value: 'Required Documents', label: 'Required Documents', trigger: '8' },
            { value: 'scholarship', label: 'Scholarships Available ', trigger: '9' },
            { value: 'Why SRM?', label: 'Why Srm?', trigger: '10' },
          ],
        },
        {
          id: '8',
          message: '1. Birth certificate \n2. Pass certificate(X and XII)\n3. Marksheet(X and XII) \n4. Aadhar card \n5. Passport size photos \n 6. Migration and transfer certificate\n7.Character Certificate\n8.COI if applicable\n9.Social status(caste certificate),\n10.Passport size photos-3nos',

          trigger: '2',
        },





        {
          //this changes frequently
          id: '9',
          message: '1. 100% scholarship for school toppers\n 2. 50% scholarship for school second topper\n 3. 25% compensation for HRDD nominees \n 4. 10% compensation for COI holders',
          trigger:'2',
        },
        {
          id: '10',
          message: '1.Sound Infrastructure\n2.Wifi Enabled Campus\n3.Experienced Faculty with International Exposure\n4.State-of-the art facilities\n5.High placement records\n6.well equipped labs\n7.hostel accomodations',
          trigger:'2',
        },





        {
          id: '6',
          options: [
            { value: 'HTM', label: 'SCHOOL OF HOSPITALITY AND TOURISM', trigger: '11' },
            { value: 'IT', label: 'SCHOOL OF INFORMATION TECHNOLOGY ', trigger: '12' },
            { value: 'LANGUAGE', label: 'SCHOOL OF LANGUAGE', trigger: '13' },
            {value:'management',label:'SCHOOL OF MANAGEMENT AND COMMERCE',trigger:'14'},
            {value:'science',label:'SCHOOL OF BASIC SCIENCE',trigger:'15'},
            {value:'public health',label:'SCHOOL OF PUBLIC HEALTH',trigger:'16'},
            {value:'social science',label:'SCHOOL OF SOCIAL SCIENCE',trigger:'17'},
            {value:'journalism',label:'SCHOOL OF JOURNALISM AND MASS COMMUNICATION',trigger:'18'},
          ],
          
        },
        {
          // this changes frequently
          id:'11',
          message:'Bsc.Hospitality and tourism Management \n Msc.Hospitality and Tourism',
          trigger:'2',
        
     
        },
        {
          // this changes frequently
          id:'12',
          message:'BCA(Bachelor of Computer Application) \n MCA(Master of Computer Application \n Bsc.IT',
          trigger:'2',
        },
        {
          id:'13',
          message:'BA in English \n MA in English',
          trigger:'2',
        },
        {
          id:'14',
          options: [
            { value: 'Management', label: 'DEPT OF MANAGEMENT', trigger: '19' },
            { value: 'business', label: 'DEPT OF COMMERCE', trigger: '20' },
          ]

          
        },
        {
          id:'19',
          message:'BBA(Bachelor in Business Administration)\nMBA(Master in Business Administration',
          trigger:'2',
        },
        {
          id:'20',
          message:'BCOM(Bachelor in Commerce)\nMCOM(Master in Commerce)',
          trigger:'2',
        },
        {
          id:'15',
          options: [
            { value: 'chem', label: 'DEPT OF CHEMISTRY', trigger: '21' },
            { value: 'phy', label: 'DEPT OF PHYSICS', trigger: '22' },
            {value:'bot',label:'DEPT OF BOTANY',trigger:'23'},
            {value:'zoo',label:'DEPT OF ZOOLOGY',trigger:'24'},
          
            
          ]

        },
        {
          id:'21',
          message:'Bsc Chemistry\nMsc Chemistry',
          trigger:'2',
        
        },
        {
          id:'22',
          message:'Bsc Physics \n Msc Physics',
          trigger:'2',
        },
        {
          id:'23',
          message:' Bsc.Botany \n Msc.Botany',
          trigger:'2',
        },
        {
          id:'24',
          message:'Bsc.Zoology \n Msc.Zoology',
          trigger:'2',
        },
        {
          id:'16',
          message:' Master of Public Health',
          trigger:'2',

        },
        {
          id:'17',
          message:' B.A. Sociology, History, Economics and Political Science',
          trigger:'2',
        },
        {
          id:'18',
          message:' BA. (JAM) Bachelor in Journalism and Mass Communication',
          trigger:'2',

        },
        {
        id:'7',
        options: [
          { value: 'HTMfee', label: 'SCHOOL OF HOSPITALITY AND TOURISM', trigger: '25' },
          { value: 'ITfee', label: 'SCHOOL OF INFORMATION TECHNOLOGY ', trigger: '26' },
          { value: 'LANGUAGEfee', label: 'SCHOOL OF LANGUAGE', trigger: '27' },
          {value:'managementfee',label:'SCHOOL OF MANAGEMENT AND COMMERCE',trigger:'28'},
          {value:'sciencefee',label:'SCHOOL OF BASIC SCIENCE',trigger:'29'},
          {value:'public healthfee',label:'SCHOOL OF PUBLIC HEALTH',trigger:'30'},
          {value:'social sciencefee',label:'SCHOOL OF SOCIAL SCIENCE',trigger:'31'},
          {value:'journalismfee',label:'SCHOOL OF JOURNALISM AND MASS COMMUNICATION',trigger:'32'},
        ],

        },
        {
          // this changes frequently
          id:'25',
          message:'Semester:35,450 \n Annual:70,000',
          trigger:'2',
        },
        {
          // this changes frequently
          id:'26',
          message:'(BCA)Semester:36,500 \n Annual:70,000 \n (MCA)Semester:65,063 Annual:1,45,500',
          trigger:'2',
        },
        {
          // this changes frequently
          id:'27',
          message:'(BA)Semester:23,700 \n Annual:44,400 \n (MA)Semester:33,625\n Annual:64,250',
          trigger:'2',
        },
        // this changes frequently
        {
          id:'28',
          message:'(BBA) Semester:36,500 \n Annual:70,000 \n(MBA) Semester:74,250 \n Annual:1,45,500 \n (BCOM) Semester:23,700 \n Annual:52,750',
          trigger:'2',
        },
        // this changes frequently

        {
          id:'29',
          message:'(Bsc BOTANY) Semester:27,075 \n Annual:51,150 \n (Msc BOTANY) Semester:40,000\n Annual:77,000 \n(Bsc CHEMISTRY) Semester:27,075\n Annual:51,150\n (Msc CHEMISTRY) Semester:40,000]\n Annual:77,000 \n (Bsc ZOOLOGY) Semester:27,075 \n Annual:51,150 \n (Msc ZOOLOGY) Semester:40,000 \n Annual:77,000',
          trigger:'2',
          
        },
        // this changes  frequently
        {
          id:'30',
          message:'Semester:58,000 \n Annual:1,13,000',
          trigger:'2',
        },
        {
          // this too changes frequently
          id:'31',
          message:'(Sociology) Semester:23,700 \n Annual:44,400 \n (History) Semester:23,700 \n Annual:44,400 \n (Political Science) Semester:23,700 \n Annual:44,400\n(Economics) Semester:23,700 \n Annual:44,400', 
          trigger:'2',
        },
        {
          // this too changes 
          id:'32',
          message:'Semester:29,700\n Annual:56,400',
          trigger:'2',
        },
          
          
          

      
        
       
      ]} />


</>





  );
}
export default App;
