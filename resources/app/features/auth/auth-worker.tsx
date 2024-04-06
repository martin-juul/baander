import { useSelector } from 'react-redux';
import { selectToken, setIsAuthenticated } from '@/store/users/auth-slice.ts';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks.ts';

export function AuthWorker() {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  // todo fix
  const isExpired = (expires_in: number) => {
    const now = Date.now() / 1000;

    return Number(expires_in) <= now;
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      if (token && !isExpired(token.expires_in)) {
        dispatch(setIsAuthenticated(true));
      } else {
        dispatch(setIsAuthenticated(false));
      }
    }, 5000);

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    }
  })

  return (
    <></>
  )
}
