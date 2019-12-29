import React from 'react';
import Navigation from '../Navigation';
import { Detail } from 'react-ui/build/Layout';
import Tab, { TabContent } from 'react-ui/build/Tab/Tab';
import ClientDetails from '../../modules/client/components/clientDetails';
import { useParams } from 'react-router';
import { useGetClient } from '../../modules/client';
import UpdateActivity from '../../modules/activity/components/updateActivity';
import { AddActivity } from '../../modules/activity/components/addActivity';

const getActivitiesByType = (activities: ActivityData[], type?: string) => {
    if (!type) {
        return activities;
    }

    return activities.filter(activity => activity.type === type);
};

export default () => {
    const { id } = useParams();
    const { data, loading } = useGetClient(id);
    const pageTitle = data && data.client.name ? data.client.name : '';
    const detail = data && data.client && (
        <ClientDetails client={data.client} />
    );

    const activeTabId = 'all';

    const activities: ActivityData[] =
        (data && data.client && data.client.activities) || [];
    return (
        <Detail pageTitle={pageTitle} left={<Navigation />} details={detail}>
            {data && data.client && <AddActivity clientId={data.client._id} />}
            <Tab type="minimal" active={activeTabId}>
                <TabContent id="all" label="Activities">
                    {getActivitiesByType(activities).map(activity => (
                        <UpdateActivity activity={activity} />
                    ))}
                </TabContent>
                <TabContent id="task" label="Tasks">
                    {getActivitiesByType(activities, 'task').map(activity => (
                        <UpdateActivity activity={activity} />
                    ))}
                </TabContent>
                <TabContent id="call" label="Call">
                    {getActivitiesByType(activities, 'call').map(activity => (
                        <UpdateActivity activity={activity} />
                    ))}
                </TabContent>
            </Tab>
        </Detail>
    );
};
