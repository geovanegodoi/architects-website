import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

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
