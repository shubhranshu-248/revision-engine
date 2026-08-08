import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RootLayout } from './components/layout/RootLayout';
import { PageLoader } from './components/ui/PageLoader';
import { ScrollToTop } from './components/shared/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Subjects = lazy(() => import('./pages/Subjects'));
const SubjectDetail = lazy(() => import('./pages/SubjectDetail'));
const ChapterDetail = lazy(() => import('./pages/ChapterDetail'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="subjects"
            element={
              <Suspense fallback={<PageLoader />}>
                <Subjects />
              </Suspense>
            }
          />
          <Route
            path="subjects/:subjectSlug"
            element={
              <Suspense fallback={<PageLoader />}>
                <SubjectDetail />
              </Suspense>
            }
          />
          <Route
            path="subjects/:subjectSlug/:chapterSlug"
            element={
              <Suspense fallback={<PageLoader />}>
                <ChapterDetail />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
