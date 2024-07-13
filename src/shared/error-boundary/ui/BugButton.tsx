import { useEffect, useState, type FC } from 'react';

export const BugButton: FC = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw Error();
    }
  }, [error]);

  return <button onClick={() => setError(true)}>🐞</button>;
};
