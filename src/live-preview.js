import { initLivePreview } from '@contentful/live-preview';

initLivePreview({
  accessToken: 'your_access_token',
  spaceId: 'your_space_id',
  environmentId: 'your_environment_id', // if using environments
});
