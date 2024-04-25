import { useEffect, useState, type FC } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton: FC = () => {
  const [error, setError] = useState(false);

  const handleThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw Error();
    }
  }, [error]);

  return <Button onClick={handleThrowError}>🐞</Button>;
};
