import { Preloader } from '@ui';
import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import {
  fetchUserOrders,
  getIsOrdersLoading,
  getOrders
} from '../../services/slices/feed';
import { useDispatch, useSelector } from '../../services/store';

export const ProfileOrders: FC = () => {
  /** TODO: взять переменную из стора +*/
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);
  const isLoading = useSelector(getIsOrdersLoading);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  if (isLoading || !orders.length) {
    return <Preloader />;
  }

  return <ProfileOrdersUI orders={orders} />;
};
