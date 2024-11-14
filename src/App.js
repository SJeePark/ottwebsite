import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './LAYOUT/AppLayout';
import Homepage from './pages/Hompage/Homepage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import MoviePage from './pages/Movies/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

//홈페이지  /
//영화 전체 보여주는 페이지 /movie?q=djfkj
//영화 디테일 페이지  / /movie:id
//추천 영화 /movie/:id/recommendation

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<Homepage/>} />
          <Route path='movies'>
            <Route index element={<MoviePage/>} />
            <Route path=':id' element={<MovieDetailPage/>}/>
          </Route>

          {/* <Route path='/movies' element={<MoviePage/>}/>
          <Route path='/movies/:id' element={<MovieDetailPage/>}/>
          21, 22행과 같은 내용 21, 22행이 좀 더 업무에 많이 사용하는 방식 */}
        </Route>

        <Route path='/error' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;


