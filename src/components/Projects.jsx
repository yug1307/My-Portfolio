import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne'

const Projects = () => {
  return (
    <> 
    <Topbar />
    <section className="p-6 bg-gradient-to-b from-fuchsia-500 to-sky-500">    
    <h1 className="text-3xl p-8 font-bold text-center">My Projects</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto text-gray-800 gap-3">
      <section className="bg-stone-100 rounded-lg shadow-lg p-6 m-3 transition-all hover:-translate-y-2">
        <h2 className="text-xl font-semibold mb-2">Grow Peak Media</h2>
        <p>
          When you submit the contact form on our website, we collect the following data:
        </p>
        
          <ul className="list-decimal m-2 p-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>WhatsApp Number</li>
            <li>Selected Service</li>
            <li>Description of your requirement</li>
          </ul>

        <div className="bg-zinc-600 w-auto text-center p-2 rounded-lg text-white">
          <a href="https://www.growpeakmedia.com">Project Link</a>
        </div>
      </section>

      <section className="bg-stone-100 rounded-lg shadow-lg p-6 m-3 transition-all hover:-translate-y-2">
        <h2 className="text-xl font-semibold mb-2">Echo Forge Systems</h2>
        <p>
          We value your business and strive to provide the best service possible. However, we have a strict refund and cancellation policy:
        </p>
        
        <ul className="list-decimal m-2 p-2">
          <li>All payments for consultations or discovery sessions are non-refundable once scheduled.</li>
          <li>Projects cancelled within 3 business days of initiation may be eligible for a partial refund, subject to work already completed.</li>
          <li>Monthly retainer agreements can be cancelled with 15 days’ prior written notice. Fees already paid are non-refundable.</li>
        </ul>

        <div className="bg-zinc-600 w-auto text-center p-2 rounded-lg text-white">
          <a href="#">Project Link</a>
        </div>
      </section>

      <section className="bg-stone-100 rounded-lg shadow-lg p-6 m-3 transition-all hover:-translate-y-2">
        <h2 className="text-xl font-semibold mb-4">Task Scheduler</h2>
        <div className="text-center">A web application for scheduling the tasks based on their priority level.</div>

        <ul className="list-decimal m-2 p-2">
          <li>React's <strong>useState</strong> hook manages state variables for upcoming tasks, 
            completed tasks, task names, priority, and deadlines.</li>

          <li>The <strong>handleTaskChange, handlePriorityChange, and handleDeadlineChange</strong> functions 
            update state based on user input.</li>

          <li>The <strong>addTask</strong> function validates inputs, creates a task object, 
            and adds it to the task list if conditions are met.</li>

          <li>The <strong>markDone</strong> function updates task status and moves completed tasks 
            to <strong>completedTasks</strong> when users click <strong>"Mark Done"</strong>.</li>

          <li>The <strong>upcomingTasks</strong> filter displays uncompleted tasks in a table with 
            task name, priority, deadline, and a <strong>"Mark Done"</strong> button.</li>
        </ul>

        <div className="bg-zinc-600 w-auto text-center p-2 rounded-lg text-white">
          <a href="https://task-scheduler-100.vercel.app/">Project Link</a>
        </div>
      </section>              
    </div>
    </section>
    <FooterOne />
  </>
  );
};


export default Projects