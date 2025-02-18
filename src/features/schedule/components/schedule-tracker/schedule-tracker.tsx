import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Settings,
  MoreVertical,
  Clock,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ScheduleItem {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  collaborators: Array<{
    name: string;
    avatar: string;
  }>;
  todoCount: number;
  duration: number;
  description?: string;
}

export default function ScheduleTracker() {
  const [selectedDate, setSelectedDate] = useState(14);
  const days = [11, 12, 13, 14, 15, 16, 17];

  const scheduleItems: ScheduleItem[] = [
    {
      id: 1,
      title: "Meeting Client",
      startTime: "02:20 PM",
      endTime: "03:30 PM",
      collaborators: [
        { name: "Miguel", avatar: "https://v0.dev/placeholder.svg" },
        { name: "Jhon", avatar: "https://v0.dev/placeholder.svg" },
        { name: "Hane", avatar: "https://v0.dev/placeholder.svg" },
      ],
      todoCount: 3,
      duration: 80,
      description: "Collaborate with Miguel, Jhon, Hane",
    },
    {
      id: 2,
      title: "Team Standup",
      startTime: "09:00 AM",
      endTime: "09:30 AM",
      collaborators: [
        { name: "Miguel", avatar: "https://v0.dev/placeholder.svg" },
        { name: "Jhon", avatar: "https://v0.dev/placeholder.svg" },
        { name: "Hane", avatar: "https://v0.dev/placeholder.svg" },
      ],
      todoCount: 2,
      duration: 30,
      description: "Collaborate with Miguel, Jhon, Hane",
    },
    {
      id: 3,
      title: "Design Review",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      collaborators: [
        { name: "Miguel", avatar: "https://v0.dev/placeholder.svg" },
        { name: "Jhon", avatar: "https://v0.dev/placeholder.svg" },
        { name: "Hane", avatar: "https://v0.dev/placeholder.svg" },
      ],
      todoCount: 1,
      duration: 60,
      description: "Feedback session with stakeholders",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-gray-500" />
            <h1 className="text-xl font-semibold">Schedule Tracker</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <RotateCcw className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Month Selector */}
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 mb-6">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">February 2025</span>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Day Selector */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {days.map((day) => (
            <Button
              key={day}
              variant={day === selectedDate ? "secondary" : "ghost"}
              className={`w-10 h-10 rounded-full ${
                day === selectedDate ? "bg-gray-100" : ""
              }`}
              onClick={() => setSelectedDate(day)}
            >
              {day}
            </Button>
          ))}
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Date Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Fri 14, 2024</span>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              Ongoing
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="w-4 h-4" />
            <span>04:30:40</span>
          </div>
        </div>

        {/* Schedule Items */}
        <div className="space-y-4">
          {scheduleItems.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{item.title}</h3>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-sm text-gray-500 mb-3">
                {item.startTime} - {item.endTime}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {item.collaborators.map((collaborator, index) => (
                      <Avatar
                        key={index}
                        className="border-2 border-white w-8 h-8"
                      >
                        <AvatarImage
                          src={collaborator.avatar}
                          alt={collaborator.name}
                        />
                        <AvatarFallback>{collaborator.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {item.description}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {item.todoCount} To Do List
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {item.duration} Min
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add New Schedule Button */}
        <Button
          className="w-full mt-4 bg-white border-2 border-dashed border-gray-200 text-gray-500 hover:bg-gray-50"
          variant="ghost"
        >
          Add New Schedule
        </Button>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Data
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Share Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
