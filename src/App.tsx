import { useState } from "react";
import NotificationItem from "./components/NotificationItem";
import { NOTIFICATIONS } from "./data";
import { NotificationType } from "./data/types";

function App() {
  const [notifications, setNotifications] =
    useState<NotificationType[]>(NOTIFICATIONS);

  const unReadCount = notifications.filter((item) => !item.isRead).length;

  const handleClick = (): void => {
    const updatedNotifications: NotificationType[] = [...notifications];
    for (let i = 0; i < updatedNotifications.length; i++) {
      updatedNotifications[i] = { ...updatedNotifications[i], isRead: true };
    }
    setNotifications(updatedNotifications);
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-white md:bg-lightGrayishBlue pt-3">
      <section className="w-[700px] bg-white rounded-xl p-7 max-[400px]:p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <h1 className="font-bold text-darkBlue text-2xl max-[400px]:text-xl">
              Notifications
            </h1>
            <span className="bg-blue text-white font-semibold px-2.5 rounded-md ml-2 max-[400px]:text-sm">
              {unReadCount}
            </span>
          </div>
          <p
            className="text-darkGrayishBlue cursor-pointer hover:text-blue"
            onClick={handleClick}
          >
            Mark all as read
          </p>
        </div>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.userName}
            notification={notification}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
