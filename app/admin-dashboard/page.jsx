"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Trash2, Edit, Users, Briefcase } from "lucide-react"

// Mock data for workers and job requests
const initialWorkers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321" },
]

const jobRequests = [
  { id: 1, client: "ABC Corp", service: "Office Cleaning", date: "2023-05-15", status: "Pending" },
  { id: 2, client: "XYZ Inc", service: "Home Cleaning", date: "2023-05-16", status: "Approved" },
]

export default function AdminDashboard() {
  const [workers, setWorkers] = useState(initialWorkers)
  const [newWorker, setNewWorker] = useState({ name: "", email: "", phone: "" })
  const [editingWorker, setEditingWorker] = useState(null)

  const addWorker = () => {
    setWorkers([...workers, { id: workers.length + 1, ...newWorker }])
    setNewWorker({ name: "", email: "", phone: "" })
  }

  const deleteWorker = (id) => {
    setWorkers(workers.filter((worker) => worker.id !== id))
  }

  const startEditingWorker = (worker) => {
    setEditingWorker(worker)
    setNewWorker(worker)
  }

  const updateWorker = () => {
    setWorkers(workers.map((w) => (w.id === editingWorker.id ? { ...w, ...newWorker } : w)))
    setEditingWorker(null)
    setNewWorker({ name: "", email: "", phone: "" })
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md pt-20">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <nav>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Users className="mr-2 h-4 w-4" />
            Workers
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Briefcase className="mr-2 h-4 w-4" />
            Job Requests
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto pt-20">
        <Tabs defaultValue="workers">
          <TabsList>
            <TabsTrigger value="workers">Workers</TabsTrigger>
            <TabsTrigger value="job-requests">Job Requests</TabsTrigger>
          </TabsList>
          <TabsContent value="workers">
            <Card>
              <CardHeader>
                <CardTitle>Manage Workers</CardTitle>
                <CardDescription>Add, update, or remove workers from your cleaning company.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 mb-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={newWorker.name}
                        onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newWorker.email}
                        onChange={(e) => setNewWorker({ ...newWorker, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={newWorker.phone}
                        onChange={(e) => setNewWorker({ ...newWorker, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  {editingWorker ? (
                    <Button onClick={updateWorker}>Update Worker</Button>
                  ) : (
                    <Button onClick={addWorker}>
                      <PlusCircle className="mr-2 h-4 w-4" /> Add Worker
                    </Button>
                  )}
                </form>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {workers.map((worker) => (
                      <TableRow key={worker.id}>
                        <TableCell>{worker.name}</TableCell>
                        <TableCell>{worker.email}</TableCell>
                        <TableCell>{worker.phone}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => startEditingWorker(worker)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteWorker(worker.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="job-requests">
            <Card>
              <CardHeader>
                <CardTitle>Job Requests</CardTitle>
                <CardDescription>View and manage cleaning service requests from clients.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jobRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.client}</TableCell>
                        <TableCell>{request.service}</TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>{request.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}