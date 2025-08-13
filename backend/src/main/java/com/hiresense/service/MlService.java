package com.hiresense.service;

import com.hiresense.dto.ParsedResumeDto;
import com.hiresense.dto.ResumeScoreDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class MlService {

    @Value("${ml.service.url}")
    private String mlServiceUrl;

    private final RestTemplate restTemplate;

    public MlService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ParsedResumeDto parseResume(byte[] resumeContent, String filename, String contentType) {
        String url = mlServiceUrl + "/parse-resume";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("file", new ByteArrayResource(resumeContent) {
            @Override
            public String getFilename() {
                return filename;
            }
        });

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        return restTemplate.postForObject(url, requestEntity, ParsedResumeDto.class);
    }

    public ResumeScoreDto scoreResume(ParsedResumeDto parsedResumeData, String jobDescription) {
        String url = mlServiceUrl + "/score-resume";

        // Create a request body that matches the FastAPI endpoint's expected JSON structure
        // This assumes your FastAPI /score-resume endpoint expects a JSON body like:
        // {"parsed_resume_data": {...}, "job_description": "..."}
        // You might need to create a dedicated DTO for this request if it gets more complex.
        
        // For simplicity, we'll use a Map or a custom class for the request body
        // Let's create a simple map for now
        MultiValueMap<String, Object> requestBody = new LinkedMultiValueMap<>();
        requestBody.add("parsed_resume_data", parsedResumeData);
        requestBody.add("job_description", jobDescription);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

        return restTemplate.postForObject(url, requestEntity, ResumeScoreDto.class);
    }
}
