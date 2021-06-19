import { Utils } from '@/utils';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// import { Container } from './styles';

interface BookId {
  id: string;
}

const BookDetails: React.FC = () => {
  const { id: bookId } = useParams<BookId>();
  const history = useHistory();

  const handlePushBack = (event: React.MouseEvent) => {
    event.preventDefault();

    Utils.handleDispatchEvent('showNavbar');

    history.goBack();
  };

  useEffect(() => {
    Utils.handleDispatchEvent('doNotShowNavbar');
  }, []);

  return (
    <>
      <h1>BookDetails</h1>
      <span onClick={handlePushBack}>VOLTAR</span>
    </>
  );
};

export default BookDetails;
