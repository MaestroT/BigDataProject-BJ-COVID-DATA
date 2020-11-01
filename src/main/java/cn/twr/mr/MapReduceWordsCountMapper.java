package cn.twr.mr;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;


import java.io.IOException;

public class MapReduceWordsCountMapper extends Mapper<LongWritable, Text,Text, IntWritable> {
    @Override
    protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
        String line = value.toString();
        String[] words= line.split(" ");
        for(String word:words){
            Text wordKey = new Text(word);
            IntWritable wordVal = new IntWritable(1);
            context.write(wordKey,wordVal);
        }
    }
}
