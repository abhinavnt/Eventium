import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Palette, 
  Upload, 
  Eye, 
  Save, 
  Image,
  Type,
  Layout,
  Smartphone,
  Monitor,
  Tablet
} from "lucide-react";

const EventBranding = () => {
  const [selectedEvent, setSelectedEvent] = useState("tech-conference-2024");
  const [previewDevice, setPreviewDevice] = useState("desktop");

  const [brandingData, setBrandingData] = useState({
    primaryColor: "#8b5cf6",
    secondaryColor: "#a855f7",
    accentColor: "#06b6d4",
    fontFamily: "Inter",
    logoUrl: "",
    bannerUrl: "",
    backgroundColor: "#0a0a0a",
    textColor: "#ffffff"
  });

  const events = [
    { id: "tech-conference-2024", name: "Tech Conference 2024" },
    { id: "marketing-summit", name: "Marketing Summit" },
    { id: "design-workshop", name: "Design Workshop" },
  ];

  const colorPresets = [
    { name: "Violet", primary: "#8b5cf6", secondary: "#a855f7", accent: "#06b6d4" },
    { name: "Blue", primary: "#3b82f6", secondary: "#1d4ed8", accent: "#06b6d4" },
    { name: "Green", primary: "#10b981", secondary: "#059669", accent: "#f59e0b" },
    { name: "Purple", primary: "#a855f7", secondary: "#7c3aed", accent: "#ec4899" },
    { name: "Orange", primary: "#f97316", secondary: "#ea580c", accent: "#84cc16" },
  ];

  const fontOptions = [
    "Inter", "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins", "Playfair Display", "Merriweather"
  ];

  const templates = [
    { id: "modern", name: "Modern", preview: "bg-gradient-to-br from-violet-500 to-purple-600" },
    { id: "minimal", name: "Minimal", preview: "bg-white border-2 border-gray-200" },
    { id: "bold", name: "Bold", preview: "bg-gradient-to-r from-orange-500 to-red-500" },
    { id: "elegant", name: "Elegant", preview: "bg-gradient-to-br from-gray-900 to-black" },
  ];

  const handleBrandingChange = (field: string, value: string) => {
    setBrandingData(prev => ({ ...prev, [field]: value }));
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
            Event Branding
          </h1>
          <p className="text-gray-400 mt-2">Customize your event's visual identity and branding</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
            <Save className="w-4 h-4 mr-2" />
            Save Branding
          </Button>
        </div>
      </motion.div>

      {/* Event Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Select Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {events.map((event) => (
                <Button
                  key={event.id}
                  variant={selectedEvent === event.id ? "default" : "outline"}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`h-auto p-4 ${
                    selectedEvent === event.id
                      ? "bg-violet-500 hover:bg-violet-600"
                      : "border-gray-700 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {event.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customization Panel */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="colors" className="space-y-6">
              <TabsList className="bg-gray-900/50 border border-gray-800 grid grid-cols-4">
                <TabsTrigger value="colors" className="data-[state=active]:bg-violet-500">
                  Colors
                </TabsTrigger>
                <TabsTrigger value="fonts" className="data-[state=active]:bg-violet-500">
                  Fonts
                </TabsTrigger>
                <TabsTrigger value="images" className="data-[state=active]:bg-violet-500">
                  Images
                </TabsTrigger>
                <TabsTrigger value="layout" className="data-[state=active]:bg-violet-500">
                  Layout
                </TabsTrigger>
              </TabsList>

              <TabsContent value="colors">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Palette className="w-5 h-5 mr-2 text-violet-400" />
                      Color Scheme
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-white mb-4 block">Color Presets</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {colorPresets.map((preset) => (
                          <Button
                            key={preset.name}
                            variant="outline"
                            className="h-12 border-gray-700 hover:bg-gray-800 flex items-center space-x-2"
                            onClick={() => {
                              handleBrandingChange("primaryColor", preset.primary);
                              handleBrandingChange("secondaryColor", preset.secondary);
                              handleBrandingChange("accentColor", preset.accent);
                            }}
                          >
                            <div className="flex space-x-1">
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.primary }}></div>
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.secondary }}></div>
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.accent }}></div>
                            </div>
                            <span className="text-white text-sm">{preset.name}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Primary Color</Label>
                        <div className="flex items-center space-x-2 mt-1">
                          <Input
                            type="color"
                            value={brandingData.primaryColor}
                            onChange={(e) => handleBrandingChange("primaryColor", e.target.value)}
                            className="w-12 h-10 p-1 bg-gray-800/50 border-gray-700"
                          />
                          <Input
                            value={brandingData.primaryColor}
                            onChange={(e) => handleBrandingChange("primaryColor", e.target.value)}
                            className="flex-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-white">Secondary Color</Label>
                        <div className="flex items-center space-x-2 mt-1">
                          <Input
                            type="color"
                            value={brandingData.secondaryColor}
                            onChange={(e) => handleBrandingChange("secondaryColor", e.target.value)}
                            className="w-12 h-10 p-1 bg-gray-800/50 border-gray-700"
                          />
                          <Input
                            value={brandingData.secondaryColor}
                            onChange={(e) => handleBrandingChange("secondaryColor", e.target.value)}
                            className="flex-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fonts">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Type className="w-5 h-5 mr-2 text-violet-400" />
                      Typography
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">Font Family</Label>
                      <Select value={brandingData.fontFamily} onValueChange={(value) => handleBrandingChange("fontFamily", value)}>
                        <SelectTrigger className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {fontOptions.map((font) => (
                            <SelectItem key={font} value={font} className="text-white">
                              <span style={{ fontFamily: font }}>{font}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: brandingData.fontFamily }}>
                          Sample Heading
                        </h3>
                        <p className="text-gray-300" style={{ fontFamily: brandingData.fontFamily }}>
                          This is how your event text will look with the selected font family.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="images">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Image className="w-5 h-5 mr-2 text-violet-400" />
                      Images & Media
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-white">Event Logo</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-violet-500/50 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-400">Click to upload logo</p>
                        <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-white">Event Banner</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-violet-500/50 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-400">Click to upload banner</p>
                        <p className="text-sm text-gray-500 mt-1">Recommended: 1920x600px</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="layout">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Layout className="w-5 h-5 mr-2 text-violet-400" />
                      Layout Templates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {templates.map((template) => (
                        <Button
                          key={template.id}
                          variant="outline"
                          className="h-24 border-gray-700 hover:bg-gray-800 p-4 flex flex-col items-center space-y-2"
                        >
                          <div className={`w-full h-12 rounded ${template.preview}`}></div>
                          <span className="text-white text-sm">{template.name}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Live Preview</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant={previewDevice === "desktop" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setPreviewDevice("desktop")}
                      className={previewDevice === "desktop" ? "bg-violet-500" : "text-gray-400"}
                    >
                      <Monitor className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={previewDevice === "tablet" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setPreviewDevice("tablet")}
                      className={previewDevice === "tablet" ? "bg-violet-500" : "text-gray-400"}
                    >
                      <Tablet className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={previewDevice === "mobile" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setPreviewDevice("mobile")}
                      className={previewDevice === "mobile" ? "bg-violet-500" : "text-gray-400"}
                    >
                      <Smartphone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className={`mx-auto rounded-lg overflow-hidden ${
                  previewDevice === "desktop" ? "w-full" : 
                  previewDevice === "tablet" ? "w-2/3" : "w-1/2"
                }`}>
                  <div 
                    className="p-6 min-h-[400px]"
                    style={{ 
                      backgroundColor: brandingData.backgroundColor,
                      color: brandingData.textColor,
                      fontFamily: brandingData.fontFamily
                    }}
                  >
                    <div 
                      className="text-center p-8 rounded-lg mb-6"
                      style={{ 
                        background: `linear-gradient(135deg, ${brandingData.primaryColor}, ${brandingData.secondaryColor})`
                      }}
                    >
                      <h1 className="text-3xl font-bold text-white mb-2">Tech Conference 2024</h1>
                      <p className="text-white/90">March 15, 2024 • San Francisco</p>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold" style={{ color: brandingData.primaryColor }}>
                        About This Event
                      </h2>
                      <p className="text-gray-300">
                        Join us for an incredible technology conference featuring industry leaders and cutting-edge innovations.
                      </p>
                      
                      <Button 
                        className="w-full mt-4"
                        style={{ 
                          backgroundColor: brandingData.accentColor,
                          color: 'white'
                        }}
                      >
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventBranding;
