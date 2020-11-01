package cn.twr.mr;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class VideoLogsDriver {
    public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException, URISyntaxException {

        URI uri= new URI("hdfs://192.168.239.201");
        Configuration hdfsconf = new Configuration();
        hdfsconf.set("dfs.blocksize","1m");
        FileSystem hdfs= FileSystem.get(uri,hdfsconf);
        Path dirout=new Path("/data2/out");
        if(hdfs.exists(dirout)){
            hdfs.delete(dirout,true);
        }

        Configuration conf = new Configuration();
        Job job = new Job(conf, "直播数据热度分析1.0");
        job.setJarByClass(VideoLogsDriver.class);
        job.setMapperClass(VideoLogsMapper.class);
        job.setReducerClass(VideoLogsReducer.class);
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(Text.class);
        FileInputFormat.addInputPath(job, new Path("hdfs://192.168.239.201/data2/"));
        FileOutputFormat.setOutputPath(job, new Path("hdfs://192.168.239.201/data2/out"));
        System.exit(job.waitForCompletion(true) ? 0 : 1);
    }
}
