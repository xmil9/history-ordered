import { router } from 'expo-router';

import { StatusView } from '@/components/StatusView';

export default function NotFoundScreen() {
  return (
    <StatusView
      kicker="Missing page"
      title="That page is not in the archive"
      body="Sequence only has the shelf of archives and the rounds you play from it."
      actionLabel="Back to the archives"
      onAction={() => router.replace('/')}
    />
  );
}
