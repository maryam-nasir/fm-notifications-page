import { type NotificationType } from "../data/types";

type NotificationItemProps = {
  notification: NotificationType;
};

const NotificationItem = ({ notification }: NotificationItemProps) => {
  return (
    <div
      className={`flex items-start justify-between p-4 rounded-lg my-2 ${
        !notification.isRead ? "bg-lightGrayishBlue" : ""
      }`}
    >
      <div>
        <img
          src={notification.userImageURL}
          alt={notification.userName}
          className="w-12 h-12"
        />
      </div>
      <div className="flex flex-col flex-1 ml-4">
        <p>
          <span className="font-bold text-darkBlue hover:text-blue cursor-pointer">
            {notification.userName}
          </span>
          <span className="ml-1.5 text-darkGrayishBlue">
            {notification.activityText}
          </span>
          {notification.postName && (
            <span className="ml-1.5 font-bold text-darkGrayishBlue hover:text-blue cursor-pointer">
              {notification.postName}
            </span>
          )}
          {notification.groupName && (
            <span className="ml-1.5 font-bold text-blue cursor-pointer">
              {notification.groupName}
            </span>
          )}
          {!notification.isRead && (
            <div className="w-2 h-2 bg-red rounded-full inline-block ml-1.5"></div>
          )}
        </p>

        <p className="text-grayishBlue">{notification.time}</p>

        {notification.description && (
          <div className="p-4 text-darkGrayishBlue border border-solid border-lightGrayishBlue-2 rounded-md mt-2 hover:bg-lightGrayishBlue-1 cursor-pointer">
            {notification.description}
          </div>
        )}
      </div>
      {notification.imageURL && (
        <div className="ml-2">
          <img
            src={notification.imageURL}
            alt="Notification image"
            className="w-12 h-12 rounded-md hover:outline hover:outline-lightGrayishBlue-2 hover:outline-offset-2 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default NotificationItem;
