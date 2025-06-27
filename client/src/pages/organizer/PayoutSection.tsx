import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Download,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Calendar
} from "lucide-react";

const PayoutSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30");

  const stats = [
    { title: "Total Earnings", value: "$24,590", change: "+18%", icon: DollarSign, color: "from-green-500 to-emerald-600" },
    { title: "Pending Payouts", value: "$3,450", change: "+12%", icon: Clock, color: "from-orange-500 to-red-600" },
    { title: "This Month", value: "$8,920", change: "+25%", icon: TrendingUp, color: "from-violet-500 to-purple-600" },
    { title: "Available Balance", value: "$5,230", change: "+8%", icon: CreditCard, color: "from-blue-500 to-cyan-600" },
  ];

  const transactions = [
    {
      id: 1,
      type: "payout",
      amount: 2450.00,
      status: "Completed",
      date: "2024-02-28",
      description: "Monthly payout - February",
      method: "Bank Transfer",
      reference: "TXN-001234"
    },
    {
      id: 2,
      type: "earning",
      amount: 680.00,
      status: "Completed",
      date: "2024-02-25",
      description: "Tech Conference 2024 - Ticket sales",
      method: "Stripe",
      reference: "TXN-001235"
    },
    {
      id: 3,
      type: "payout",
      amount: 1850.00,
      status: "Pending",
      date: "2024-02-20",
      description: "Weekly payout - Week 8",
      method: "PayPal",
      reference: "TXN-001236"
    },
    {
      id: 4,
      type: "refund",
      amount: -125.00,
      status: "Completed",
      date: "2024-02-18",
      description: "Refund - Marketing Summit",
      method: "Stripe",
      reference: "TXN-001237"
    },
    {
      id: 5,
      type: "earning",
      amount: 320.00,
      status: "Completed",
      date: "2024-02-15",
      description: "Design Workshop - Early bird sales",
      method: "Stripe",
      reference: "TXN-001238"
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "bank",
      name: "Bank of America ****1234",
      status: "Active",
      default: true
    },
    {
      id: 2,
      type: "paypal",
      name: "john.doe@email.com",
      status: "Active",
      default: false
    },
    {
      id: 3,
      type: "stripe",
      name: "Stripe Express ****5678",
      status: "Pending",
      default: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Pending":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Failed":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "payout":
        return <ArrowUpRight className="w-4 h-4 text-green-400" />;
      case "earning":
        return <ArrowDownLeft className="w-4 h-4 text-blue-400" />;
      case "refund":
        return <ArrowUpRight className="w-4 h-4 text-red-400" />;
      default:
        return <DollarSign className="w-4 h-4 text-gray-400" />;
    }
  };

  const getMethodIcon = (type: string) => {
    switch (type) {
      case "bank":
        return "🏦";
      case "paypal":
        return "💳";
      case "stripe":
        return "💰";
      default:
        return "💳";
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Payouts & Earnings
          </h1>
          <p className="text-gray-400 mt-2">Manage your earnings, payouts, and payment methods</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
            <CreditCard className="w-4 h-4 mr-2" />
            Request Payout
          </Button>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className="text-green-400 text-sm mt-1 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800 grid grid-cols-3">
            <TabsTrigger value="transactions" className="data-[state=active]:bg-violet-500">
              Transactions
            </TabsTrigger>
            <TabsTrigger value="methods" className="data-[state=active]:bg-violet-500">
              Payment Methods
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-violet-500">
              Payout Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transactions">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Transaction History</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Label className="text-gray-400">Last</Label>
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger className="w-20 bg-gray-800/50 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="7">7d</SelectItem>
                        <SelectItem value="30">30d</SelectItem>
                        <SelectItem value="90">90d</SelectItem>
                        <SelectItem value="365">1y</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-700/50 rounded-lg">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3">
                            <h3 className="text-white font-semibold">{transaction.description}</h3>
                            <Badge className={getStatusColor(transaction.status)}>
                              {transaction.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                            <span>{new Date(transaction.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{transaction.method}</span>
                            <span>•</span>
                            <span>{transaction.reference}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-semibold ${
                          transaction.amount > 0 ? "text-green-400" : "text-red-400"
                        }`}>
                          {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                        </p>
                        <p className="text-gray-400 text-sm capitalize">{transaction.type}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methods">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white">Payment Methods</CardTitle>
                      <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Method
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentMethods.map((method, index) => (
                        <motion.div
                          key={method.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl">{getMethodIcon(method.type)}</div>
                            <div>
                              <div className="flex items-center space-x-3">
                                <h3 className="text-white font-semibold">{method.name}</h3>
                                {method.default && (
                                  <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30">
                                    Default
                                  </Badge>
                                )}
                                <Badge className={getStatusColor(method.status)}>
                                  {method.status}
                                </Badge>
                              </div>
                              <p className="text-gray-400 text-sm capitalize">{method.type} account</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {method.status === "Active" ? (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            ) : (
                              <Clock className="w-5 h-5 text-orange-400" />
                            )}
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              Edit
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-violet-500/10 border border-violet-500/20 text-violet-400 hover:bg-violet-500/20">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Request Instant Payout
                    </Button>
                    <Button className="w-full justify-start bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Payout
                    </Button>
                    <Button className="w-full justify-start bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50">
                      <Download className="w-4 h-4 mr-2" />
                      Download Statement
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Automatic Payouts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Payout Schedule</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="manual">Manual Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-white">Minimum Payout Amount</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-gray-400">$</span>
                      <Input
                        type="number"
                        defaultValue="100"
                        className="bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Default Payment Method</Label>
                    <Select defaultValue="bank">
                      <SelectTrigger className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="stripe">Stripe Express</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Tax Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Tax ID / EIN</Label>
                    <Input
                      placeholder="Enter your tax ID"
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white">Tax Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-white">Business Type</Label>
                    <Select defaultValue="individual">
                      <SelectTrigger className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default PayoutSection;
