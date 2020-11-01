package cn.twr.mr;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

import java.io.IOException;

public class VideoLogsMapper extends Mapper<LongWritable, Text,Text, Text> {
    @Override
    protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {

        String line = value.toString();
        String[] row = line.split("\t");
        if (row.length == 8) {
            String name = row[2];
            String time = row[7];
            context.write(new Text(name), new Text(time));
        }
    }
}
