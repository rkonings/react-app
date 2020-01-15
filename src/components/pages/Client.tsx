import React from 'react';
import { useParams } from 'react-router';
import { Detail } from 'react-ui/build/Layout';
import Tab, { TabContent } from 'react-ui/build/Tab/Tab';
import { AddActivity } from '../../modules/activity/components/addActivity';
import UpdateActivity from '../../modules/activity/components/updateActivity';
import ClientDetails from '../../modules/client/components/clientDetails';
import { Activity, useClientQuery } from '../../modules/hooks';
import Navigation from '../Navigation';

type Activities = Array<Omit<Activity, 'user' | 'client'>>;

const getActivitiesByType = (activities: Activities, type?: string) => {
    if (!type) {
        return activities;
    }

    return activities.filter(activity => activity.type === type);
};

export default () => {
    const { id } = useParams();
    const { data } = useClientQuery({ variables: { _id: id } });
    const pageTitle = data && data.client.name ? data.client.name : '';
    const detail = (data && data.client && (
        <ClientDetails client={data.client} />
    )) || <div />;

    const activeTabId = 'all';

    const activities: Activities =
        (data && data.client && data.client.activities) || [];
    return (
        <Detail
            pageTitle={pageTitle}
            left={<Navigation />}
            details={detail}
            toolbar={
                (data && data.client && (
                    <AddActivity clientId={data.client._id} />
                )) || <div />
            }
        >
            {(data && data.client && (
                <Tab type="minimal" active={activeTabId}>
                    <TabContent id="all" label="Activities">
                        {getActivitiesByType(activities).map(activity => (
                            <UpdateActivity
                                key={activity._id}
                                activity={activity}
                                clientId={data.client._id}
                            />
                        ))}
                    </TabContent>
                    <TabContent id="task" label="Tasks">
                        {getActivitiesByType(activities, 'task').map(
                            activity => (
                                <UpdateActivity
                                    key={activity._id}
                                    activity={activity}
                                    clientId={data.client._id}
                                />
                            )
                        )}
                    </TabContent>
                    <TabContent id="call" label="Call">
                        {getActivitiesByType(activities, 'call').map(
                            activity => (
                                <UpdateActivity
                                    key={activity._id}
                                    activity={activity}
                                    clientId={data.client._id}
                                />
                            )
                        )}
                    </TabContent>
                </Tab>
            )) || <div />}
        </Detail>
    );
};
