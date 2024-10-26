const data = [
  { name: "Swapnil Naganath Hingane", email: "swapnilhingane9290@gmail.com", pass: "swapnil hingane.jpg" },
  { name: "TestName", email: "test@gmail.com", pass: "Om.png" },
  { name: "Om Nandurkar", email: "nandurkarom172@gmail.com", pass: "Om.png" },
  { name: "Shweta Ramesh Konale", email: "shwetakonale34@gmail.com", pass: "shweta konale.jpg" },
  { name: "Sunny Kumar", email: "kumarsunny1246@gmail.com", pass: "sunny kumar.jpg" },
  { name: "Amit Dattatray Kumbhar", email: "amitkumbhar9800@gmail.com", pass: "amit kumbhar.jpg" },
  { name: "Sakshi Sanjay Navale", email: "sakshinavale07@gmail.com", pass: "Sakshi Navale.jpg" },
  { name: "Sakshi Rajesh Nehere", email: "sakshinehere2303@gmail.com", pass: "Sakshi Nehere.jpg" },
  { name: "Khushi Yogesh Sharma", email: "iamkhushi2204@gmail.com", pass: "Khushi Sharma.jpg" },
  { name: "Arbaj Aslam Pathan", email: "arbajp002@gmail.com", pass: "Arbaj Pathan.jpg" },
  { name: "Divya Girhe", email: "divyagirhe890@gmail.com", pass: "Divya Girhe.jpg" },
  { name: "Neil Dehankar", email: "dehankarneil@gmail.com", pass: "Neil Dehankar.jpg" },
  { name: "Onkar Torane Dayanand", email: "onkardtorane@gmail.com", pass: "Torane Dayanand.jpg" },
  { name: "Madhura Shashikant Mali", email: "madhura7451@gmail.com", pass: "Madhura Mali.jpg" },
  { name: "Yash Chandrakant Bhalerao", email: "yashbhalerao1001@gmail.com", pass: "YASH BHALERAO.jpg" },
  { name: "Mohit Wat", email: "mohitwatofficial@gmail.com", pass: "MOHIT WAt.jpg" },
  { name: "Sangmeshwar Patil", email: "sangmeshwarp8@gmail.com", pass: "SANGMESHWAR PATIl.jpg" },
  { name: "Kanchan Somani", email: "kanchansomani0214@gmail.com", pass: "KANCHAN SOMANI .jpg" },
  { name: "Ayushi Rahangdale", email: "ayushirahangdale991@gmail.com", pass: "AYUSHI RAHANGDALE.jpg" },
  { name: "Dhanshri Pravin Nemade", email: "26dn2005@gmail.com", pass: "DHANSHRI NEMADE.jpg" },
  { name: "Shweta Gajanan Kharche", email: "shwetakharche24@gmail.com", pass: "SHWETA KHARCHE.jpg" },
  { name: "Shravani Rahul Borude", email: "shravaniborude30@gmail.com", pass: "SHRAVANI BORUDE.jpg" },
  { name: "Shantanu Agarkar", email: "shantanuagarkar9880@gmail.com", pass: "SHANTANU AGARKAR.jpg" },
  { name: "Aishwarya Ajay Sawant", email: "sawantaishwarya478@gmail.com", pass: "AISHWARYA SAWANT.jpg" },
  { name: "Harshal Bhor", email: "harshalbhor1172@gmail.com", pass: "HARSHAL BHOR.jpg" },
  { name: "Shweta Ramsing Rajput", email: "shwetarajput0707@gmail.com", pass: "Shweta rajput.pdf" },
  { name: "Umang Mahesh Khurana", email: "umangk1804@gmail.com", pass: "Umang khurana.pdf" },
  { name: "Tejaswi Tukaram Gawade", email: "tejaswigawade5@gmail.com", pass: "Tejaswi Gawade.pdf" },
  { name: "Vaishali Misal", email: "vaishalimisal25062003@gmail.com", pass: "Vaishali misal.pdf" },
  { name: "Kavita Bandu Vyavahare", email: "563kavitavyavahare47@gmail.com", pass: "Kavita Vyavhare.pdf" },
  { name: "Suraj Jagtap", email: "surajjagtap5204@gmail.com", pass: "Suraj jagtap.pdf" },
  { name: "Mahima Singh", email: "singhmahimaajitkumar.19@gmail.com", pass: "Mahima Singh.pdf" },
  { name: "Dhiraj Santosh Gawade", email: "dhirajgawade777@gmail.com", pass: "Dhiraj Gawade.pdf" },
  { name: "Kunal Ashok Zende", email: "Kunalzende17@gmail.com", pass: "Kunal Zende.pdf" },
  { name: "Aman Rajjak Sayyad", email: "aman.sayyad789789@gmail.com", pass: "Aman sayyad.pdf" },
  { name: "Prapti Bargir", email: "praptibargir21@gmail.com", pass: "Prapti Bargir.pdf" },
  { name: "Pallavi Subhash Bikkad", email: "pallavibikkad11@gmail.com", pass: "Pallavi Bikkad.pdf" },
  { name: "Pratik Dahale", email: "dahalepratik2004@gmail.com", pass: "Pratik Dahale.pdf" },
  { name: "Sambhaji Pawar", email: "pawarsambhaji235@gmail.com", pass: "Sambhaji Pawar.pdf" },
  { name: "Pranav Wagadare", email: "wagadarepranav@gmail.com", pass: "Pranav Wagadare.pdf" },
  { name: "Pratik Dadhe", email: "Pratikdadhe24@gmail.com", pass: "Pratik Dadhe.pdf" },
  { name: "Pritee Tate", email: "tatepritee@gmail.com", pass: "Pritee Tate.pdf" },
  { name: "Aditya Raju Sawant", email: "adisawant454@gmail.com", pass: "Aditya Sawant.pdf" },
  { name: "Mahesh Gorakh Pathare", email: "maheshpathare1212@gmail.com", pass: "Mahesh Pathare.pdf" },
  { name: "Devyani Borse", email: "devyani.borse1628@gmail.com", pass: "Devyani Borse.pdf" },
  { name: "Isha Gavhane", email: "ishagavhane07@gmail.com", pass: "Isha Gavhane.pdf" },
  { name: "Srushti Kishor Chavan", email: "srushtichavan1981@gmail.com", pass: "shrustui chavan.pdf" },
  { name: "Manish Pandey", email: "mp0579460@gmail.com", pass: "manish pandey.pdf" },
  { name: "Adarsh Kumbhar", email: "indup4512@gmail.com", pass: "ADARSH KUMBHAR.pdf" },
  { name: "Kapil Mathpati", email: "Kapilmathpati9180@gmail.com", pass: "KAPIL MATHPATl.pdf" },
  { name: "Prerana Ramdas Satpute", email: "preranasatpute15@gmail.com", pass: "PRERANA SATPUTE.pdf" },
  { name: "Prema Tukaram Dongare", email: "premadongare89@gmail.com", pass: "PREMA DONGARE.pdf" },
  { name: "Atharav Pramodkumar Borate", email: "atharavborate43@gmail.com", pass: "ATHARVA BORATE.pdf" },
  { name: "Mayur Savkhedkar", email: "mayursavkhedkar725@gmail.com", pass: "MAYUR SAVKHEDKAR.pdf" },
  { name: "Majida Sayyed", email: "majidasayyed20@gmail.com", pass: "MAJIDA SAYYED.pdf" },
  { name: "Shoiba Shaikh", email: "shoiba2005@gmail.com", pass: "SHOBA SHAIKH.pdf" },
  { name: "Aayush Milind Nikam", email: "aayushmnikam@gmail.com", pass: "AAYUSH NIKAM.pdf" },
  { name: "Bhoskar Bhakti Bibhishan", email: "bhoskarbhakti@gmail.com", pass: "BHOSKAR BHAKTI.pdf" },
  { name: "Sarvdny Potfode", email: "sarvadhnyapotfode73@gmail.com", pass: "SARVDNY POTFODE.pdf" },
  { name: "Pruthviraj Bhimrav Rathod", email: "pruthvirajrathod645@gmail.com", pass: "PRUTHVIRAJ RATHOD.pdf" },
  { name: "Isha Sunil Ghorpade", email: "isha.22420020@viit.ac.in", pass: "ISHA GHORPADE.pdf" },
  { name: "Shrenik Jitendra Khatavkar", email: "shrenikkhatavkar9696@gmail.com", pass: "SHRENIK KHATAVKER.pdf" },
  { name: "Rajdip Revannath Pange", email: "rajpanage@gmail.com", pass: "RAJDIP PANGE.pdf" },
  { name: "Kshitija Deshmukh", email: "kshitija966@gmail.com", pass: "KSHITIJA DESHMUKH.pdf" },
  { name: "Aneesh Rajendra Koparde", email: "aneeshkoparde.2005@gmail.com", pass: "ANEESH KOPARDE.pdf" },
  { name: "Gauri Dattatray Kashid", email: "gaurikashid9@gmail.com", pass: "GAURI KASHID.jpg" },
  { name: "Yash Nandkumar Kalaskar", email: "kalaskaryash096@gmail.com", pass: "Yash Kalaskar.png" },
  { name: "Pratik Pravin Patil", email: "pratikpatil7517@gmail.com", pass: "Pratik Patil.png" },
  { name: "Raghav Chakradhar Chilwant", email: "raghavchilwant7@gmail.com", pass: "Raghav Chilwant.png" },
  { name: "Shubham Kisan Sabale", email: "shubhamsabale4733@gmail.com", pass: "SHUBHAM MADANE.jpg" },
  { name: "Shubham Sunil Patil", email: "shubhamspatil5555@gmail.com", pass: "Shubham patil.png" },
  { name: "Vedant Suhas Kale", email: "vedant35kale@gmail.com", pass: "Vedant kale.png" },
  { name: "Pranay Vinod Gedam", email: "pranayg176@gmail.com", pass: "Pranay Gedam.png" },
  { name: "Omkar Uttam Gaikwad", email: "gaikwadomkar262@gmail.com", pass: "Omkar Gaikwad.png" },
  { name: "Parth Deshmukh", email: "parthdeshmukh0101@gmail.com", pass: "Parth Deshmukh.png" },
  { name: "Aditya Thodsare", email: "thodsareaditya@gmail.com", pass: "Aditya Thodsare.png" },
  { name: "Harshada Sanjay Pawale", email: "harshadapawale702@gmail.com", pass: "Harshada Pawale.png" },
  { name: "Anupama Pankaj Nikam", email: "anupamanikam6@gmail.com", pass: "Anupama Nikam.png" },
  { name: "Omkar Santosh Jagtap", email: "omkarjagtap318@gmail.com", pass: "Omkar Jagtap.png" },
  { name: "Rohit Kharat", email: "rohitkharat1245@gmail.com", pass: "ROHIT KHARAT.png" },
  { name: "Aditya Jitendra Tote", email: "adityatote24@gmail.com", pass: "Aditya Tote.png" },
  { name: "Darshan Hajgude", email: "darshanhajgude2004@gmail.com", pass: "Darshan Hajgude.png" },
  { name: "Ahrushi Dhongade", email: "arushidhongde01@gmail.com", pass: "Ahrushi Dhongade.png" },
  { name: "Pooja Santosh Gadekar", email: "poojagadekar9370@gmail.com", pass: "Pooja Santosh Gadekar.jpg" },
  { name: "Vaishnavi Anant Shinde", email: "Shindevaishnavi3476@gmail.com", pass: "Vaishnavi shinde.jpg" },
  { name: "Aditya Lalaso Jadhav", email: "Jadhavaditya8378@gmail.com", pass: "Aditya Jadhav.jpg" },
  { name: "Sharvari Wadhekar", email: "sharvariwadhekar@gmail.com", pass: "SHARVARI WADHEKAR.jpg" },
  { name: "Janhavi Dhongade", email: "aspjanhavi@gmail.com", pass: "JANHAVI DHONGADE.jpg" },
  { name: "Adinath Tambe", email: "adinathtambe4@gmail.com", pass: "ADINATH TAMBE.jpg" },
  { name: "Pawar Vivek Achyut", email: "pawarvivek041@gmail.com", pass: "Pawar Vivek Achyut.jpg" },
  { name: "Pratik Baile", email: "pratikbaile140305@gmail.com", pass: "PRATIK BAILE.jpg" },
  { name: "Gayatri Shinde", email: "gayatrishinde2603@gmail.com", pass: "GAYATRI SHINDE.jpg" },
  { name: "Atharva 4331", email: "atharva4331@gmail.com", pass: "ATHARVA 4331.jpg" },
  { name: "Bhandare Priti", email: "bhandarepriti022@gmail.com", pass: "PRITI BHANDARE.jpg" },
  { name: "Aniruddha Pramod Gawande", email: "anirudhagawande22@gmail.com", pass: "ANIRUDDHA GAWANDE.jpg" },
  { name: "Shweta Damahee", email: "shweta1641991@gmail.com", pass: "SHWETA DAMAHEE.jpg" },
  { name: "Shahadev Kakasaheb Darade", email: "shahadevdarade968@gmail.com", pass: "SHAHADEV DARADE.jpg" },
  { name: "Karan Shivaji Kolhatkar", email: "karankolhatkar7758@gmail.com", pass: "KARAN KOLHATKAR.jpg" },
  { name: "Varsha Govindrao Kulkarni", email: "varsha.gk2010@gmail.com", pass: "VARSHA KULKARNI.jpg" },
  { name: "Rashi Tulshiram Jadhao", email: "rashijadhao8@gmail.com", pass: "RASHI JADHAO.jpg" },
  { name: "Vaishnavi Sunil Vadak Deshmukh", email: "vaishnavivadakdeshmukh@gmail.com", pass: "VAISHNAVI DESHMUKH.jpg" },
  { name: "Shubham Dilip Madane", email: "shubhammadane001@gmail.com", pass: "SHUBHAM MADANE.jpg" },
  { name: "Rutuja Satish Toshniwal", email: "rutuja.toshniwal01@gmail.com", pass: "RUTUJA TOSHNlWAL.jpg" },
  { name: "Mahesh Deepak Divate", email: "maheshddivate@gmail.com", pass: "MAHESH DIVATE.jpg" },
];

export default data;
