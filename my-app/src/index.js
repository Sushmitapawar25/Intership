import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import HelloWorld from './components/RCT-A1-2/Task1.1/helloWorld';
import MyComp from './components/RCT-A1-2/Task1.1/myComp';
import DefState from './components/RCT-A1-2/Task1.1/defState';
import TwoNum from './components/RCT-A1-2/Task1.1/twoNum';
import ArrNum from './components/RCT-A1-2/Task1.1/arrNum';
import StudentArr from './components/RCT-A1-2/Task1.1/studArr';
import QuizShow from './components/RCT-A1-2/Task1.1/quizShow';
import Display from './components/RCT-A1-2/Task2/Task2.1';
import Display1 from './components/RCT-A1-2/Task2/Task2.2';
import Display2 from './components/RCT-A1-2/Task3/Task3.1';
import Display3 from './components/RCT-A1-2/Task3/Task3.2';
import Display4 from './components/RCT-A1-2/Task4/Task4';
import Display5 from './components/RCT-A1-2/Task5/Task5';
import ProdDetail from './components/RCT-A1-2/Task6/Task6.1';
import ProdDetail1 from './components/RCT-A1-2/Task6/Task6.2';
import ProdDetail2 from './components/RCT-A1-2/Task6/Task6.3';
import ProdDetail3 from './components/RCT-A1-2/Task6/Task6.4';
import Prod from './components/RCT-A1-2/Task6/Task6.5';
import Prod1 from './components/RCT-A1-2/Task6/Task6.6';
import Produ from './components/RCT-A1-2/Task6/Task6.7';
import tot from './components/RCT-A1-2/Task6/Task6.8';
import Emp1 from './components/RCT-A1-2/Task7/Task7.1';
import Employ from './components/RCT-A1-2/Task7/Task7.2';
import Employ1 from './components/RCT-A1-2/Task7/Task7.3';
import Employ2 from './components/RCT-A1-2/Task7/Task7.4';
import Employ3 from './components/RCT-A1-2/Task7/Task7.5';
import Employ4 from './components/RCT-A1-2/Task7/Task7.6';
import Employ5 from './components/RCT-A1-2/Task7/Task7.7';
import Employ6 from './components/RCT-A1-2/Task7/Task7.8';
import Employ7 from './components/RCT-A1-2/Task7/Task7.9';
import Employ8 from './components/RCT-A1-2/Task7/Task7.Ten';
import Empp1 from './components/RCT-A1-2/Task8/Task8.1';
import Empp2 from './components/RCT-A1-2/Task8/Task8.2';
import Empp3 from './components/RCT-A1-2/Task8/Task8.3';
import MyComp1 from './components/RCT-A1-3/Task1/Task1.1';
import Mycomp2 from './components/RCT-A1-3/Task1/Task1.2';
import Mycomp3 from './components/RCT-A1-3/Task1/Task1.3';
import Mycomp4 from './components/RCT-A1-3/Task1/Task1.4';
import Baton from './components/RCT-A1-3/Task2/Task2.1';
import Baton1 from './components/RCT-A1-3/Task2/Task2.2';
import Append from './components/RCT-A1-3/Task3/Task3.1';
import Append1 from './components/RCT-A1-3/Task3/Task3.2';
import Append2 from './components/RCT-A1-3/Task3/Task3.3';
import BasketBall from './components/RCT-A1-3/Task4/Task4.1';
import BasketBall1 from './components/RCT-A1-3/Task4/Task4.2';
import BasketBall2 from './components/RCT-A1-3/Task4/Task4.3';
import AddNum from './components/RCT-A1-3/Task5/Task5.1';
import AddNum1 from './components/RCT-A1-3/Task5/Task5.2';
import SellSold from './components/RCT-A1-3/Task6/Task6.1';
import SellSold1 from './components/RCT-A1-3/Task6/Task6.2';
import SellSold2 from './components/RCT-A1-3/Task6/Task6.3';
import SellSold3 from './components/RCT-A1-3/Task6/Task6.4';
import SortH from './components/RCT-A1-3/Task7/Task7.1';
import SortH1 from './components/RCT-A1-3/Task7/Task7.2';
import FiltH from './components/RCT-A1-3/Task7/Task7.3';
import PriceD from './components/RCT-A1-3/Task8/Task8.1';
import Movie from './components/RCT-A1-3/Task9/Task9';
import CodeApp from './components/RCT-A1-3/Task10/Task10.1';
import CodeApp1 from './components/RCT-A1-3/Task10/Task10.2';
import CountingMachine from './components/RCT-A1-4/Task1/Task1.1/CountingMachine';
import PhotoPage from './components/RCT-A1-4/Task1/Task1.2/PhotoPage';
import VisitorSystem from './components/RCT-A1-4/Task1/Task1.3/visitorSystem';
import PlayerSystem from './components/RCT-A1-4/Task2/Task2.1/playerSystem';
import PlayerSystem1 from './components/RCT-A1-4/Task2/Task2.2/playerSystem1';
import PlayerSystem2 from './components/RCT-A1-4/Task2/Task2.3/playerSystem';
import PlayerSystem3 from './components/RCT-A1-4/Task2/Task2.4/playerSystem';
import MainComponent from './components/RCT-A1-4/Task3/Maincomp';
import LibrarySystem from './components/RCT-A1-4/Task4/Task4.1/librarySystem';
import LibrarySystem1 from './components/RCT-A1-4/Task4/Task4.2/librarySystem';
import LibrarySystem2 from './components/RCT-A1-4/Task4/Task4.3/librarySystem';
import Store from './components/RCT-A1-4/Task6/Task6.1/store';
import Store1 from './components/RCT-A1-4/Task6/Task6.2/store';
import Store2 from './components/RCT-A1-4/Task6/Task6.3/store';
import MessagingApp from './components/RCT-A1-4/Task7/Task7.1/messagingApp';
import MessagingApp1 from './components/RCT-A1-4/Task7/Task7.2/messagingApp';
import MessagingApp2 from './components/RCT-A1-4/Task7/Task7.3/messagingApp';
import MobileSystem from './components/RCT-A1-4/Task5/MobileSystem';
import SimpleForm from './components/RCT-A1-5/Task1/Task1.1/SimpleForm';
import MainCOmponent from './components/RCT-A1-5/Task1/Task1.1/MainComponent';
import MainComponent3 from './components/RCT-A1-5/Task1/Task1.2/MainComponentt';
import CourseComponent from './components/RCT-A1-5/Task1/Task1.3/courseComponent';
import SimpleForm1 from './components/RCT-A1-5/Task2/SimpleForm1';
import CourseSystem from './components/RCT-A1-5/Task3/Task3.1/courseSysteem';
import CourseSystem1 from './components/RCT-A1-5/Task3/Task3.2/courseSystem1';
import HomeScreen from './components/RCT-A1-5/Task4/Task4.1/HomeScreen';
import HomeScreen1 from './components/RCT-A1-5/Task4/Task4.2/HomeScreen1';
import HomeScreen2 from './components/RCT-A1-5/Task5/Task5.1/Homescreen';
import HomeScreen3 from './components/RCT-A1-5/Task5/Task5.2/Homescreen1';
import SimpleForm5 from './components/RCT-A1-6/Task1/Task1.1/a)/simpleFormm';
import Show from './components/RCT-A1-6/Task1/Task1.1/a)/Show';
import Show1 from './components/RCT-A1-6/Task1/Task1.1/a)/Show1';
import MainCOmponent1 from './components/RCT-A1-6/Task1/Task1.1/a)/MainComponennt';
import MComponent from './components/RCT-A1-6/Task1/Task1.1/b)/MainCOmp1';
import Task12 from './components/RCT-A1-6/Task1/Task1.2/task1.2';
import Task13 from './components/RCT-A1-6/Task1/Task1.3/task1.3';
import Task14 from './components/RCT-A1-6/Task1/Task1.4/task1.4';
import Task15 from './components/RCT-A1-6/Task1/Task1.5/Task1.5';
import Task2_1 from './components/RCT-A1-6/Task2/Task2_1';
import Task2_2 from './components/RCT-A1-6/Task2/Task2_2';
import CountryCityDropdown from './components/RCT-A1-6/Task3/Task3';
import WorkStudyForm from './components/RCT-A1-6/Task4/Task4.1';
import WorkStudyForm1 from './components/RCT-A1-6/Task4/Task4.2';
import WorkStudyRadio from './components/RCT-A1-6/Task5/Task5.1';
import WorkStudyRadio1 from './components/RCT-A1-6/Task5/Task5.2';
import Task61 from './components/RCT-A1-6/Task6/Task6.1';
import Task62 from './components/RCT-A1-6/Task6/Task6.2';
import Task71 from './components/RCT-A1-6/Task7/Task7.1';
import Task72 from './components/RCT-A1-6/Task7/Task7.2';
import Task8 from './components/RCT-A1-6/Task8/Task8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloWorld /> */}
    {/* <MyComp /> */}
    {/* <DefState /> */}
    {/* <TwoNum /> */}
    {/* <ArrNum /> */}
    {/* <StudentArr /> */}
    {/* <QuizShow/> */}

    {/* Task 2 */}
    {/* <Display/> */}
    {/* <Display1/> */}

    {/* TAsk 3 */}
    {/* <Display2/> */}
    {/* <Display3/> */}

    {/* <Display4/> */}

     {/* <Display5/> */}
      {/* <ProdDetail/> */}

    {/* Task 6 */}
    {/* <ProdDetail1/> */}
    {/* <ProdDetail2/> */}
    {/* <ProdDetail3/> */}
    {/* <Prod/> */}
    {/* <Prod1/> */}
    {/* <Produ/> */}
    {/* <tot/> */}

    {/* Task 7 */}
    {/* <Emp1/> */}
    {/* <Employ/> */}
    {/* <Employ1/> */}
    {/* <Employ2/> */}
    {/* <Employ3/> */}
    {/* <Employ4/> */}
    {/* <Employ5/> */}
    {/* <Employ6/> */}
    {/* <Employ7/> */}
    {/* <Employ8/> */}

    {/* <Empp1/> */}
    {/* <Empp2/> */}
    {/* <Empp3/> */}

    {/* RCT_A3 */}
    {/* <MyComp1/> */}
    {/* <Mycomp2/> */}
    {/* <Mycomp3/> */}
    {/* <Mycomp4/> */}

    {/* <Baton/> */}
    {/* <Baton1/> */}
    {/* <Append/> */}
    {/* <Append1/> */}
    {/* <Append2/> */}
    {/* <BasketBall/> */}
    {/* <BasketBall1/> */}
    {/* <BasketBall2/> */}
    {/* <AddNum/> */}
    {/* <AddNum1/> */}
    {/* <SellSold/> */}
    {/* <SellSold1/> */}
    {/* <SellSold2/> */}
    {/* <SellSold3/> */}
    {/* <SortH/> */}
    {/* <SortH1/> */}
    {/* <FiltH/> */}
    {/* <PriceD/> */}
    {/* <Movie/> */}
    {/* <CodeApp/> */}
    {/* <CodeApp1/> */}
    {/* RCT-A1-4 */}
    {/* <CountingMachine/> */}
    {/* <PhotoPage/> */}
    {/* <VisitorSystem/> */}
    {/* <PlayerSystem/> */}
     {/* <PlayerSystem1/> */}
    {/* <PlayerSystem2/> */}
    {/* <PlayerSystem3/> */}
    {/* <MainComponent/> */}
    {/* <LibrarySystem/> */}
    {/* <LibrarySystem1/> */}
    {/* <LibrarySystem2/> */}
    {/* <Store/> */}
    {/* <Store1/> */}
     {/* <Store2/> */}
     {/* <MessagingApp/> */}
     {/* <MessagingApp1/> */}
      {/* <MessagingApp2/> */}
      {/* <MobileSystem/> */}


    {/* <SimpleForm/> */}
    {/* <MainCOmponent/> */}
    {/* <MainComponent3/> */}
    {/* <CourseComponent/> */}
    {/* <SimpleForm1/> */}
    {/* <CourseSystem/> */}
    {/* <CourseSystem1/> */}
    {/* <HomeScreen/> */}
    {/* <HomeScreen1/> */}
    {/* <HomeScreen2/> */}
    {/* <HomeScreen3/> */}

    {/* <SimpleForm5/> */}
    {/* <Show/> */}
    {/* <Show1/> */}
    {/* <MainCOmponent1/> */}
    {/* <MComponent/> */}
    {/* <Task12/> */}
     {/* <Task13/> */}
     {/* <Task14/> */}
     {/* <Task15/> */}
     {/* <Task2_1/> */}
      {/* <Task2_2/> */}
      {/* <CountryCityDropdown/> */}
      {/* <WorkStudyForm/> */}
      {/* <WorkStudyForm1/> */}
      {/* <WorkStudyRadio/> */}
      {/* <WorkStudyRadio1/> */}
      {/* <Task61/> */}
      {/* <Task62/> */}
      {/* <Task71/> */}
      {/* <Task72/> */}
      <Task8/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
