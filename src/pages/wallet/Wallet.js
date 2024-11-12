import React, { useState } from 'react';

const dummyData = [
  { company: 'Microsoft', amount: 100, date: '2023-01-01' },
  { company: 'Apple', amount: 200, date: '2023-01-02' },
  { company: 'Amazon', amount: 300, date: '2023-01-03' },
  { company: 'Google', amount: 400, date: '2023-01-04' },
  { company: 'Facebook', amount: 500, date: '2023-01-05' },
  { company: 'IBM', amount: 600, date: '2023-01-06' },
  { company: 'Oracle', amount: 700, date: '2023-01-07' },
  { company: 'SAP', amount: 800, date: '2023-01-08' },
  { company: 'Salesforce', amount: 900, date: '2023-01-09' },
  { company: 'Adobe', amount: 1000, date: '2023-01-10' },
  { company: 'Intel', amount: 1100, date: '2023-01-11' },
  { company: 'Cisco', amount: 1200, date: '2023-01-12' },
  { company: 'HP', amount: 1300, date: '2023-01-13' },
  { company: 'Dell', amount: 1400, date: '2023-01-14' },
  { company: 'VMware', amount: 1500, date: '2023-01-15' },
  { company: 'Intuit', amount: 1600, date: '2023-01-16' },
  { company: 'ServiceNow', amount: 1700, date: '2023-01-17' },
  { company: 'Square', amount: 1800, date: '2023-01-18' },
  { company: 'Shopify', amount: 1900, date: '2023-01-19' },
  { company: 'Workday', amount: 2000, date: '2023-01-20' },
];

function Wallet() {
  const [currentPage, setCurrentPage] = use
