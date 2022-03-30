import React, { Suspense } from 'react'
import LazyLoading from './components/LazyLoading';

function App() {
  const Header = React.lazy(() => {
    return new Promise((resolve, reject) => 
    setTimeout(
      () => resolve(import('./components/Header/Header'))
      ,2500)
    )
  })
  
  const PostMain = React.lazy(() => {
    return new Promise((resolve, reject) => 
    setTimeout(
      () => resolve(import('./components/PostMain/PostMain'))
      ,2500)
      )
  })
  return (
    <div>
    <Suspense fallback={<LazyLoading />}>
      <Header />
      <PostMain />
    </Suspense>
    </div>
  );
}

export default App;