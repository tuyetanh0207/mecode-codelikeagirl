import React, { Component } from 'react';
import * as Location from 'expo-location';
import { UserLocationContext } from '../Contexts/UserLocation';
import * as CONST from '../Utils/constants';
import { FlatList } from 'react-native';
import { activity } from '../api/activity';
import { Item } from "../Components/TaskItem";

class TaskListComponent extends Component {
    static contextType = UserLocationContext;

    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }

    componentDidMount() {
        this.startLocationTracking();
    }

    startLocationTracking = async () => {
        await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.Balanced,
                distanceInterval: CONST.THRESOLD_LOCATION_DISTANCE,
            },
            async newLocation => {
                // Fetch new task list
                const newLatitude = newLocation.coords.latitude;
                const newLongitude = newLocation.coords.longitude;
                console.log('tracking while render tasklist');
                const newTaskList = await activity(newLatitude, newLongitude);

                // Update tasklist
                const updateTaskList = newTaskList.data.map(task => ({
                    taskId: task._id,
                    name: task.nameTask,
                    icon: CONST.getIconByTitle(task.nameTask, CONST.normalIconMapping_60),
                    shortAddr: task.shortAddr,
                    addr: task.address,
                    dist: task.distance,
                    hint: task.hint,
                    idCampaign: task.idCampaign,
                    nameCampaign: task.nameCampaign,
                    isContraint: task.isContraint,
                    luckywheelID: task.luckywheelID

                }));
              
                this.setState({ tasks: updateTaskList });
                // console.log('UPDATE....', this.states.tasks);
            }
        );
    }

    render() {
        return (
            <FlatList
                keyExtractor={(task, index) => index.toString()}
                data={this.state.tasks}
                renderItem={({ item }) => (
                    <Item
                        name={item.name}
                        icon={item.icon}
                        shortAddr={item.shortAddr}
                        addr={item.addr}
                        dist={item.dist}
                        hint={item.hint}
                        taskId={item.taskId}
                        idCampaign= {item.idCampaign}
                        nameCampaign= {item.nameCampaign}
                        isContraint= {item.isContraint}
                        luckywheelID= {item.luckywheelID}
                    />
                )}
            />

        );
    }
}

export default TaskListComponent;
