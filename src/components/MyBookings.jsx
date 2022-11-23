import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Row, Spinner } from "reactstrap";
import { myBookings, selectedDataDisplay, selectedReschedulerDetails } from "../store/scheduler/actions";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { Table, Container } from "reactstrap";
import { BiTrash, BiPencil } from "react-icons/bi";


const MyBookings = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const userProfile = useSelector(
    (state) => state?.availabilitiesReducer?.userProfile
  );

  const myBookingsData = useSelector(
    (state) => state?.availabilitiesReducer?.myBookings?.pxResults
  );

  const loader = useSelector(
    (state) => state?.availabilitiesReducer?.myBookingsLoader
  );

    const handleReschedule = (id,date, type, guid, pxObjClass)=>{
      dispatch(selectedDataDisplay(new Date(date)));
      dispatch(selectedReschedulerDetails({id, date, type, guid, pxObjClass}))
      navigate("/scheduler/re-schedule/"+id+"?Type="+type);
    }

    const handleCancel = (id,date, type, guid, pxObjClass)=>{
      dispatch(selectedReschedulerDetails({id, date, type, guid, pxObjClass}))
      navigate("/scheduler/cancel/"+id);
    }

  useEffect(() => {
    dispatch(myBookings("chandan_palamakula"));
  }, [dispatch]);

  const storedUser = sessionStorage.getItem('userProfile');
  useEffect(() => {
    if (!userProfile && storedUser ==='null') {
      navigate("/login");
    }
});

if (loader) {
  return (
    <div className="loader">
      <Spinner color="dark">
        Loading...
      </Spinner>
    </div>
  );
}

  return (
    <Container className="container-scheduler">
      <Login />
      <Row>
        <Col>
          <h3>My bookings</h3>
        </Col>
      </Row>
      <Row>
        <Table hover>
          <thead>
            <tr>
              <th className={"w-10"}>S.no</th>
              <th className={"w-40"}>Type</th>
              <th className={"w-10"}>Scheduled date</th>
              <th className={"w-10"}>Start time</th>
              <th className={"w-10"}>End time</th>
              <th className={"w-20"}>Action</th>
              {/* <th className={"w-10"}>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {myBookingsData?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.SchedulerType}</td>
                <td>{item.ScheduledDate}</td>
                <td>{item.StartTime}</td>
                <td>{item.EndTime}</td>
                <td>
                  {/* <Button color="info" onClick={()=>handleReschedule(item.SchedulerEmailID, item.ScheduledDate, item.SchedulerType, item.pyGUID, item.pxObjClass )}>Reschedule</Button> */}
                  <Button color="info" onClick={()=>handleReschedule(item.SchedulerEmailID, item.ScheduledDate, item.SchedulerType, item.pyGUID, item.pxObjClass )} style={{marginRight: "5px"}} >Reschedule <BiPencil /></Button>
                  <Button color="danger" onClick={()=>handleCancel(item.SchedulerEmailID, item.ScheduledDate, item.SchedulerType, item.pyGUID, item.pxObjClass )} >Cancel <BiTrash /></Button>
                </td>
                {/* <td>
                  <Button color="danger" onClick={()=>handleCancel(item.SchedulerEmailID, item.ScheduledDate, item.SchedulerType, item.pyGUID, item.pxObjClass )}>Cancel</Button>
                  <Button color="danger" >Cancel</Button>

                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default MyBookings;
