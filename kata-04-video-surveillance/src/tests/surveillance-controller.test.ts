import {MotionSensor, SurveillanceController, VideoRecorder} from "../core/surveillance-controller";

class FakeSensor implements MotionSensor {
    isDetectingMotion(): boolean {
        return false;
    }
}

class FakeVideoRecorder implements VideoRecorder {
    startRecording() {
        console.log('start recording...');
    }

    stopRecording() {
        console.log('stop recording...');
    }
}

describe('Surveillance Controller', () => {
    let sensor: MotionSensor;
    let videoRecorder: FakeVideoRecorder;
    let controller: SurveillanceController;

    beforeEach(() => {
        sensor = new FakeSensor();
        videoRecorder = new FakeVideoRecorder();
        controller = new SurveillanceController(sensor, videoRecorder);
    });

    it('asks the recorder to stop recording when the sensor detects no motion', () => {
        const spyRecorder = jest.spyOn(videoRecorder, 'stopRecording');

        controller.recordMotion();

        expect(spyRecorder).toBeTruthy();
    });

    it('asks the recorder to start recording when the sensor detects motion', () => {
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
        stubSensor.mockImplementation(() => true);
        const spyRecorder = jest.spyOn(videoRecorder, 'startRecording');

        controller.recordMotion();

        expect(spyRecorder).toBeTruthy();
    });

    it('asks the recorder to stop recording when the sensor throw an unexpected error', () => {
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
        stubSensor.mockImplementation(() => {
            throw new Error('Unexpected Error');
        });
        const spyRecorder = jest.spyOn(videoRecorder, 'stopRecording');

        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('checks the sensor status once per second', () => {
        const sensorSpy = jest.spyOn(sensor, 'isDetectingMotion');
        const numberOfSeconds = 3;

        controller.recordMotion(numberOfSeconds);

        expect(sensorSpy).toHaveBeenCalledTimes(numberOfSeconds);
    });
});