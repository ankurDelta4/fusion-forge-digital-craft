import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Edit, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSiteData } from "@/contexts/SiteDataContext";

const Admin = () => {
  const { toast } = useToast();
  const { siteData, updateHeroData, addBlog, deleteBlog } = useSiteData();
  const [activeTab, setActiveTab] = useState("overview");
  const [newBlog, setNewBlog] = useState({ title: "", excerpt: "", content: "", author: "" });
  const [localHeroData, setLocalHeroData] = useState(siteData.hero);

  const handleSaveHero = () => {
    updateHeroData(localHeroData);
    toast({
      title: "Hero Section Updated",
      description: "Changes have been saved successfully.",
    });
  };

  const handleAddBlog = () => {
    if (newBlog.title && newBlog.content) {
      addBlog(newBlog);
      setNewBlog({ title: "", excerpt: "", content: "", author: "" });
      toast({
        title: "Blog Added",
        description: "New blog post has been created successfully.",
      });
    }
  };

  const handleDeleteBlog = (id) => {
    deleteBlog(id);
    toast({
      title: "Blog Deleted",
      description: "Blog post has been removed successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage your website content and settings</p>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Online
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-background/50 backdrop-blur">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary/10">Overview</TabsTrigger>
            <TabsTrigger value="hero" className="data-[state=active]:bg-primary/10">Hero Section</TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-primary/10">Services</TabsTrigger>
            <TabsTrigger value="blogs" className="data-[state=active]:bg-primary/10">Blog Management</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{siteData.blogs.length}</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/5 via-background to-blue-500/5 border-blue-500/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{siteData.services.length}</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500/5 via-background to-green-500/5 border-green-500/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">8</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/5 via-background to-purple-500/5 border-purple-500/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">Live</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-background via-primary/2 to-background border-primary/10">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <Button className="h-20 flex-col gap-2 bg-gradient-to-br from-primary to-primary/80">
                  <Plus className="h-5 w-5" />
                  Add New Blog
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 border-primary/20 hover:bg-primary/5">
                  <Edit className="h-5 w-5" />
                  Edit Services
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 border-primary/20 hover:bg-primary/5">
                  <Save className="h-5 w-5" />
                  Backup Data
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hero Section Tab */}
          <TabsContent value="hero" className="space-y-6">
            <Card className="bg-gradient-to-br from-background via-primary/2 to-background border-primary/10">
              <CardHeader>
                <CardTitle>Hero Section Settings</CardTitle>
                <CardDescription>Update the main hero section content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-title">Main Title</Label>
                  <Input
                    id="hero-title"
                    value={localHeroData.title}
                    onChange={(e) => setLocalHeroData(prev => ({
                      ...prev,
                      title: e.target.value
                    }))}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle">Subtitle</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={localHeroData.subtitle}
                    onChange={(e) => setLocalHeroData(prev => ({
                      ...prev,
                      subtitle: e.target.value
                    }))}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-cta">CTA Button Text</Label>
                  <Input
                    id="hero-cta"
                    value={localHeroData.ctaText}
                    onChange={(e) => setLocalHeroData(prev => ({
                      ...prev,
                      ctaText: e.target.value
                    }))}
                    className="bg-background/50"
                  />
                </div>
                <Button onClick={handleSaveHero} className="bg-gradient-to-r from-primary to-primary/80">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card className="bg-gradient-to-br from-background via-primary/2 to-background border-primary/10">
              <CardHeader>
                <CardTitle>Services Management</CardTitle>
                <CardDescription>Manage your service offerings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {siteData.services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 rounded-lg border border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
                      <div>
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-primary/20">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Management Tab */}
          <TabsContent value="blogs" className="space-y-6">
            {/* Add New Blog */}
            <Card className="bg-gradient-to-br from-background via-primary/2 to-background border-primary/10">
              <CardHeader>
                <CardTitle>Add New Blog Post</CardTitle>
                <CardDescription>Create a new blog post for your website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="blog-title">Title</Label>
                    <Input
                      id="blog-title"
                      value={newBlog.title}
                      onChange={(e) => setNewBlog(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter blog title"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blog-author">Author</Label>
                    <Input
                      id="blog-author"
                      value={newBlog.author}
                      onChange={(e) => setNewBlog(prev => ({ ...prev, author: e.target.value }))}
                      placeholder="Author name"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blog-excerpt">Excerpt</Label>
                  <Textarea
                    id="blog-excerpt"
                    value={newBlog.excerpt}
                    onChange={(e) => setNewBlog(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief description of the blog post"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blog-content">Content</Label>
                  <Textarea
                    id="blog-content"
                    value={newBlog.content}
                    onChange={(e) => setNewBlog(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Write your blog content here..."
                    className="min-h-32 bg-background/50"
                  />
                </div>
                <Button onClick={handleAddBlog} className="bg-gradient-to-r from-primary to-primary/80">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Blog Post
                </Button>
              </CardContent>
            </Card>

            {/* Existing Blogs */}
            <Card className="bg-gradient-to-br from-background via-primary/2 to-background border-primary/10">
              <CardHeader>
                <CardTitle>Existing Blog Posts</CardTitle>
                <CardDescription>Manage your published blog posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {siteData.blogs.map((blog) => (
                    <div key={blog.id} className="p-4 rounded-lg border border-primary/10 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{blog.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{blog.excerpt}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span>By {blog.author}</span>
                            <span>{blog.date}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-primary/20">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleDeleteBlog(blog.id)}
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
