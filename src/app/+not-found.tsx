import { router } from 'expo-router';

import { StatusView } from '@/components/StatusView';

export default function NotFoundScreen() {
  return (
    <StatusView
      kicker="Missing page"
      title="That page is not in the timeline"
      body="Ordered only has the shelf of timelines and the rounds you play from it."
      actionLabel="Back to the timelines"
      onAction={() => router.replace('/')}
    />
  );
}
