import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Edit, PlusCircle, Trash2 } from "lucide-react";

// Mock data for workers
const initialWorkers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
  },
];

const WorkersTab = ({}) => {
  const [workers, setWorkers] = useState(initialWorkers);
  const [newWorker, setNewWorker] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [editingWorker, setEditingWorker] = useState(null);

  const addWorker = () => {
    setWorkers([...workers, { id: workers.length + 1, ...newWorker }]);
    setNewWorker({ name: "", email: "", phone: "" });
  };

  const deleteWorker = (id) => {
    setWorkers(workers.filter((worker) => worker.id !== id));
  };

  const startEditingWorker = (worker) => {
    setEditingWorker(worker);
    setNewWorker(worker);
  };

  const updateWorker = () => {
    setWorkers(
      workers.map((w) =>
        w.id === editingWorker.id ? { ...w, ...newWorker } : w
      )
    );
    setEditingWorker(null);
    setNewWorker({ name: "", email: "", phone: "" });
  };

  return (
    <Card>
      <CardHeader className="mb-3">
        <CardTitle className="text-2xl">Manage Workers</CardTitle>
        <CardDescription>
          Add, update, or remove workers from your cleaning company.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4 mb-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newWorker.name}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, name: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={newWorker.email}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, email: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={newWorker.phone}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, phone: e.target.value })
                }
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
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => startEditingWorker(worker)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteWorker(worker.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default WorkersTab;
