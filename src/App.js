
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import './App.css';

function App() {
  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Hi! I am SRMBOT. Welcome to SRM. Please type assist.',
          trigger: 'assist',
        },
        {
          id: 'assist',
          user: true,
          trigger: '3',
        },
        {
          id: 'fallback',
          message: 'Sorry, I can only assist if you type "assist". Please type "assist" to continue.',
          trigger: 'assist',
        },
        {
          id: '3',
          message: 'These are the areas in which I can assist',
          trigger: 'areas',
        },
        {
          id: 'areas',
          options: [
            { value: 'admission', label: 'admission', trigger: 'add' },
            { value: 'courses', label: 'course', trigger: 'cou' },
            { value: 'fee details', label: 'fee details', trigger: 'fee' },
          ],
        },
        {
          id: 'add',
          options: [
            { value: 'How to apply for admission?', label: 'How to apply for admission?', trigger: 'req' },
            { value: 'scholarship', label: 'Scholarships Available ', trigger: 'sch' },
            { value: 'Why SRM?', label: 'Why Srm?', trigger: 'why' },
          ],
        },
        {
          id: 'req',
          message: '1. Birth certificate \n2. Pass certificate(X and XII)\n3. Marksheet(X and XII) \n4. Aadhar card \n5. Passport size photos \n 6. Migration and transfer certificate\n7.Character Certificate\n8.COI if applicable\n9.Social status(caste certificate),\n10.Passport size photos-3nos',

          trigger: 'assist',
        },





        {
          id: 'sch',
          message: '100% for school toppers\n50%for school second topper\n25%for HRDD nominees \n 10%for COI holders',
          trigger:'assist',
        },
        {
          id: 'why',
          message: '1.Sound Infrastructure\n2.Wifi Enabled Campus\n3.Experienced Faculty with International Exposure\n4.State-of-the art facilities\n5.High placement records\n6.well equipped labs\n7.hostel accomodations',
          trigger:'assist',
        },





        {
          id: 'cou',
          options: [
            { value: 'HTM', label: 'SCHOOL OF HOSPITALITY AND TOURISM', trigger: 'htm1' },
            { value: 'IT', label: 'SCHOOL OF INFORMATION TECHNOLOGY ', trigger: 'IT1' },
            { value: 'LANGUAGE', label: 'SCHOOL OF LANGUAGE', trigger: 'lang' },
            {value:'management',label:'SCHOOL OF MANAGEMENT AND COMMERCE',trigger:'mngment'},
            {value:'science',label:'SCHOOL OF BASIC SCIENCE',trigger:'sci'},
            {value:'public health',label:'SCHOOL OF PUBLIC HEALTH',trigger:'public health1'},
            {value:'social science',label:'SCHOOL OF SOCIAL SCIENCE',trigger:'social sci'},
            {value:'journalism',label:'SCHOOL OF JOURNALISM AND MASS COMMUNICATION',trigger:'jour'},
          ],
          
        },
        {
          id:'htm1',
          message:'Bsc.Hospitality and tourism Management \n Msc.Hospitality and Tourism',
          trigger:'assist',
        
     
        },
        {
          id:'IT1',
          message:'BCA(Bachelor of Computer Application) \n MCA(Master of Computer Application \n Bsc.IT',
          trigger:'assist',
        },
        {
          id:'lang',
          message:'BA in English \n MA in English',
          trigger:'assist',
        },
        {
          id:'mngment',
          options: [
            { value: 'Management', label: 'DEPT OF MANAGEMENT', trigger: 'management1' },
            { value: 'business', label: 'DEPT OF COMMERCE', trigger: 'business1' },
          ]

          
        },
        {
          id:'management1',
          message:'BBA(Bachelor in Business Administration)\nMBA(Master in Business Administration',
          trigger:'assist',
        },
        {
          id:'business1',
          message:'BCOM(Bachelor in Commerce)\nMCOM(Master in Commerce)',
          trigger:'assist',
        },
        {
          id:'sci',
          options: [
            { value: 'chem', label: 'DEPT OF CHEMISTRY', trigger: 'chemistry' },
            { value: 'phy', label: 'DEPT OF PHYSICS', trigger: 'physics' },
            {value:'bot',label:'DEPT OF BOTANY',trigger:'Botany'},
            {value:'zoo',label:'DEPT OF ZOOLOGY',trigger:'zoology'},
          
            
          ]

        },
        {
          id:'chemistry',
          message:'Bsc Chemistry\nMsc Chemistry',
          trigger:'assist',
        
        },
        {
          id:'physics',
          message:'Bsc Physics \n Msc Physics',
          trigger:'assist',
        },
        {
          id:'Botany',
          message:' Bsc.Botany \n Msc.Botany',
          trigger:'assist',
        },
        {
          id:'zoology',
          message:'Bsc.Zoology \n Msc.Zoology',
          trigger:'assist',
        },
        {
          id:'public health1',
          message:' Master of Public Health',
          trigger:'assist',

        },
        {
          id:'social sci',
          message:' B.A. Sociology, History, Economics and Political Science',
          trigger:'assist',
        },
        {
          id:'jour',
          message:' BA. (JAM) Bachelor in Journalism and Mass Communication',
          trigger:'assist',

        },
        {
        id:'fee',
        options: [
          { value: 'HTMfee', label: 'SCHOOL OF HOSPITALITY AND TOURISM', trigger: 'htm2' },
          { value: 'ITfee', label: 'SCHOOL OF INFORMATION TECHNOLOGY ', trigger: 'IT2' },
          { value: 'LANGUAGEfee', label: 'SCHOOL OF LANGUAGE', trigger: 'lang2' },
          {value:'managementfee',label:'SCHOOL OF MANAGEMENT AND COMMERCE',trigger:'mngment2'},
          {value:'sciencefee',label:'SCHOOL OF BASIC SCIENCE',trigger:'sci2'},
          {value:'public healthfee',label:'SCHOOL OF PUBLIC HEALTH',trigger:'public health2'},
          {value:'social sciencefee',label:'SCHOOL OF SOCIAL SCIENCE',trigger:'social sci2'},
          {value:'journalismfee',label:'SCHOOL OF JOURNALISM AND MASS COMMUNICATION',trigger:'jour2'},
        ],

        },
        {
          id:'htm2',
          message:'Semester:35,450 \n Annual:70,000',
          trigger:'assist',
        },
        {
          id:'IT2',
          message:'(BCA)Semester:36,500 \n Annual:70,000 \n (MCA)Semester:65,063 Annual:1,45,500',
          trigger:'assist',
        },
        {
          id:'lang2',
          message:'(BA)Semester:23,700 \n Annual:44,400 \n (MA)Semester:33,625\n Annual:64,250',
          trigger:'assist',
        },
        {
          id:'mngment2',
          message:'(BBA) Semester:36,500 \n Annual:70,000 \n(MBA) Semester:74,250 \n Annual:1,45,500 \n (BCOM) Semester:23,700 \n Annual:52,750',
          trigger:'assist',
        },
        {
          id:'sci2',
          message:'(Bsc BOTANY) Semester:27,075 \n Annual:51,150 \n (Msc BOTANY) Semester:40,000\n Annual:77,000 \n(Bsc CHEMISTRY) Semester:27,075\n Annual:51,150\n (Msc CHEMISTRY) Semester:40,000]\n Annual:77,000 \n (Bsc ZOOLOGY) Semester:27,075 \n Annual:51,150 \n (Msc ZOOLOGY) Semester:40,000 \n Annual:77,000',
          trigger:'assist',
          
        },
        {
          id:'public health2',
          message:'Semester:58,000 \n Annual:1,13,000',
          trigger:'assist',
        },
        {
          id:'social sci2',
          message:'(Sociology) Semester:23,700 \n Annual:44,400 \n (History) Semester:23,700 \n Annual:44,400 \n (Political Science) Semester:23,700 \n Annual:44,400\n(Economics) Semester:23,700 \n Annual:44,400', 
          trigger:'assist',
        },
        {
          id:'jour2',
          message:'Semester:29,700\n Annual:56,400',
          trigger:'assist',
        },
          
          
          

      
        
       
      ]} />







  );
}
export default App;
