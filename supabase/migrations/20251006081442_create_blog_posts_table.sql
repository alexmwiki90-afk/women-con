/*
  # Create Blog Posts Table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each post
      - `title` (text) - Title of the blog post
      - `slug` (text, unique) - URL-friendly version of title
      - `excerpt` (text) - Short description/preview
      - `content` (text) - Full blog post content
      - `author` (text) - Author name
      - `category` (text) - Post category
      - `read_time` (text) - Estimated reading time
      - `image_url` (text) - Featured image URL
      - `published` (boolean) - Whether post is published
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for anyone to read published posts
    - Add policy for authenticated users to create/update posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  read_time text DEFAULT '5 min read',
  image_url text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can create blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, read_time, image_url, published) VALUES
(
  'The Future of Web Development in 2025',
  'future-of-web-development-2025',
  'Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to edge computing.',
  'The web development landscape is evolving rapidly. In this comprehensive guide, we explore the key trends that will define web development in 2025 and beyond...',
  'Sarah Chen',
  'Technology',
  '5 min read',
  'images/image_1.jpg',
  true
),
(
  'Building Scalable Microservices Architecture',
  'building-scalable-microservices',
  'Learn how to design and implement microservices that can handle millions of requests while maintaining reliability and performance.',
  'Microservices architecture has become the standard for building modern, scalable applications. This article covers best practices and patterns...',
  'Michael Rodriguez',
  'Architecture',
  '8 min read',
  'images/image_2.jpg',
  true
),
(
  'AI and Machine Learning in Modern Applications',
  'ai-ml-modern-applications',
  'Discover how artificial intelligence is revolutionizing user experiences and enabling new possibilities in application development.',
  'Artificial Intelligence and Machine Learning are no longer just buzzwords. They are transforming how we build and interact with applications...',
  'Emily Johnson',
  'AI & ML',
  '6 min read',
  'images/image_3.jpg',
  true
),
(
  'Best Practices for Cloud-Native Development',
  'cloud-native-development-practices',
  'A comprehensive guide to building applications that fully leverage the power and flexibility of cloud infrastructure.',
  'Cloud-native development requires a different mindset and approach. Learn the key principles and practices that will help you succeed...',
  'David Kim',
  'Cloud',
  '7 min read',
  'images/image_4.jpg',
  true
),
(
  'Securing Modern Web Applications',
  'securing-modern-web-applications',
  'Essential security practices every developer should implement to protect applications and user data from emerging threats.',
  'Security should be a top priority in every application. This guide covers the essential practices for keeping your applications secure...',
  'Jessica Martinez',
  'Security',
  '9 min read',
  'images/image_5.jpg',
  true
),
(
  'The Rise of Edge Computing',
  'rise-of-edge-computing',
  'Understanding how edge computing is bringing computation closer to users and transforming application architecture.',
  'Edge computing is changing the game by bringing processing power closer to the end user. Learn how this impacts your architecture decisions...',
  'Alex Turner',
  'Infrastructure',
  '6 min read',
  'images/image_6.jpg',
  true
);
