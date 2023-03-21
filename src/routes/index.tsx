import { ScrollToTop } from '@website/helpers';
import {
  ContactPage,
  GalleryPage,
  HomePage,
  LayoutPage,
  ProjectsPage,
} from '@website/pages';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

export const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <ScrollToTop /> */}
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </>
  )
);

export function RouterProviderDecorator({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(<Route path="*" element={children} />)
      )}
    />
  );
}
