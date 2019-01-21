package com.onlineTest.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.onlineTest.Entity.DBFile;
import com.onlineTest.Entity.Test;
import com.onlineTest.Pojo.FilePojo;
import com.onlineTest.Repository.DBFileRepository;
import com.onlineTest.Repository.TestRepo;

@Service
public class DBFileStorageService{

    @Autowired
    private DBFileRepository dbFileRepo;
    @Autowired
    private TestRepo testRepo;

    public void storeFile(MultipartFile file) throws Exception {
    	System.out.println("inside store file");
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new Exception("Sorry! Filename contains invalid path sequence " + fileName);
            }

            DBFile dbFile = new DBFile(fileName, file.getContentType(), file.getBytes());
            StringTokenizer st=new StringTokenizer(fileName,".");
            String examName=st.nextToken();
            Test testEntity=new Test();
            testEntity.setEname(examName);
            testRepo.save(testEntity);
            System.out.println(dbFile.getFileName());
            dbFileRepo.save(dbFile);
        } catch (IOException ex) {
            throw new Exception("Could not store file " + fileName + ". Please try again!", ex);
        }
    }
    
    public List<FilePojo> getFileList(String name){
    	List<FilePojo> list=new ArrayList<FilePojo>();
    	FilePojo filePojo;
    	DBFile dbFile=dbFileRepo.findByFileName(name+".csv");
    	String fileContent=new String(dbFile.getData());
    	//System.out.println(fileContent);
    	StringTokenizer lineToken=new StringTokenizer(fileContent,"\n");
    	while(lineToken.hasMoreTokens()){
    		filePojo=new FilePojo();
    		StringTokenizer wordToken=new StringTokenizer(lineToken.nextToken(),",");
    		filePojo.setQuestionNo(wordToken.nextToken());
    		filePojo.setQuestion(wordToken.nextToken());
    		filePojo.setOption1(wordToken.nextToken());
    		filePojo.setOption2(wordToken.nextToken());
    		filePojo.setOption3(wordToken.nextToken());
    		filePojo.setOption4(wordToken.nextToken());
    		filePojo.setAnswer(wordToken.nextToken());
    		list.add(filePojo);
    	}
    	return list;
    }
    public void getResult(String testName,String results[]){
    	
    }
    
}