import { FC } from 'react';

import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';
import { useSelector } from '../../services/store';
import { getOrders, getTodayOrders } from '../../services/slices/feed';

const mapOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
  /** TODO: взять переменные из стора +*/
  const orders = useSelector(getOrders);
  const todayOrders = useSelector(getTodayOrders);

  const feed = todayOrders.response;

  const readyOrders = mapOrders(orders, 'done');

  const pendingOrders = mapOrders(orders, 'pending');

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={feed}
    />
  );
};
